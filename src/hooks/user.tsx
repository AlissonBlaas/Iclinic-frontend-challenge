import {
  createContext,
  useContext,
  useState,
  ReactChildren,
  ReactChild,
  useCallback,
} from 'react';

import api from '../services/api';

interface TsxProps {
  children: ReactChildren | ReactChild;
}

interface User {
  [key: string]: string;
}

interface UserDataInterface {
  data: User | null;
}

export type UserContextData = {
  user: User | null;
  fetchUserInfo(userId: (string | number) | undefined): void;
  children?: ReactChildren | ReactChild;
  isLoading: boolean;
};

const UserHooksContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: TsxProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchUserInfo = useCallback((userId: string | undefined) => {
    setIsLoading(true);
    api
      .get<User[], UserDataInterface>(`/api/people/${userId}`)
      .then(response => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setIsLoading(false);
        throw new Error(response);
      });
  }, []);

  return (
    <UserHooksContext.Provider value={{ user, fetchUserInfo, isLoading }}>
      {children}
    </UserHooksContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserHooksContext);

  if (!context) {
    throw new Error('useUser must be use within an defaultHooksProvider');
  }

  return context;
}

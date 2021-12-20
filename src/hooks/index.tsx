import { ReactChildren, ReactChild } from 'react';

import { UserProvider } from './user';

interface TsxProps {
  children: ReactChildren | ReactChild;
}

const AppProvider = ({ children }: TsxProps) => (
  <UserProvider>{children}</UserProvider>
);

export default AppProvider;

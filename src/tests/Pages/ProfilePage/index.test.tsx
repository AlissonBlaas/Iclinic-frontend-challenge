import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { mocked } from 'ts-jest/utils';
import { useUser } from '../../../hooks/user';

import ProfilePage from '../../../Pages/ProfilePage';

jest.mock('react-router-dom', () => {
  const mockedUsedNavigate = jest.fn();
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
  };
});

jest.mock('../../../hooks/user', () => ({
  useUser() {
    return {
      fetchUserInfo: jest.fn(),
    };
  },
}));

describe('ProfilePage', () => {
  it('should fetch user data', () => {
    const { fetchUserInfo } = useUser();
    const fetchUserInfoMocked = mocked(fetchUserInfo);
    const { getByText } = render(<ProfilePage />);

    const initButton = getByText('choose your path again, Padawan');

    fireEvent.click(initButton);

    expect(fetchUserInfoMocked).toHaveBeenCalledTimes(0);
  });

  it('should go back to homepage', () => {
    const history = useNavigate();
    const nativateMocked = mocked(history);
    const { getByText } = render(<ProfilePage />);

    const initButton = getByText('back');

    fireEvent.click(initButton);

    expect(nativateMocked).toHaveBeenLastCalledWith('/');
  });

  it('get user name', async () => {
    const { user } = useUser();

    expect(user?.name).toStrictEqual(undefined);
  });
});

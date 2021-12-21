import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { mocked } from 'ts-jest/utils';
import { useUser } from '../../../hooks/user';

import HomePage from '../../../Pages/HomePage';

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

describe('HomePage', () => {
  it('should fetch user data', () => {
    const { fetchUserInfo } = useUser();
    const fetchUserInfoMocked = mocked(fetchUserInfo);
    const { getByText } = render(<HomePage />);

    const initButton = getByText('START');

    fireEvent.click(initButton);

    expect(fetchUserInfoMocked).toHaveBeenCalledTimes(0);
  });

  it('should redirect to profile', () => {
    const history = useNavigate();
    const nativateMocked = mocked(history);
    const { getByText } = render(<HomePage />);

    const initButton = getByText('START');

    fireEvent.click(initButton);

    expect(nativateMocked).toHaveBeenLastCalledWith('/user-profile');
  });
});

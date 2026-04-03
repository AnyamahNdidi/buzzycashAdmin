'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '../store';
import { logout } from '../slices/authSlice';
import { useLoginMutation, useLogoutMutation } from '../api/authApi';

export const useAuthRedux = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((state: RootState) => state.auth);
  
  // RTK Query mutations
  const [loginMutation, { isLoading: isLoggingIn }] = useLoginMutation();
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const result = await loginMutation({ email, password }).unwrap();
      // The authSlice extraReducer will automatically set isAuthenticated, token, and user
      // No manual dispatch needed
      router.push('/dashboard');
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      // If your API has a logout endpoint, call it
      await logoutMutation().unwrap();
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      // Always clear local Redux state
      dispatch(logout());
      router.push('/login');
    }
  };

  return {
    isAuthenticated: auth.isAuthenticated,
    token: auth.token,
    user: auth.user,
    isLoading: isLoggingIn || isLoggingOut,
    login,
    logout: handleLogout,
  };
};
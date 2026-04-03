import { baseApi } from './baseApi';

// Request & response types
interface LoginRequest {
  email: string;
  password: string;
}

interface AdminUser {
  email: string;
  id: string;
  isAdmin: boolean;
  isSuper: boolean;
}

interface LoginResponse {
  admin: AdminUser;
  message: string;
  token: string;
}

interface GetProfileResponse {
  admin: AdminUser;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Admin login
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/admin/login',
        method: 'POST',
        body: credentials,
      }),
      // Invalidate any previous auth cache
      invalidatesTags: ['Auth'],
    }),

    // Get current admin profile (optional, for verifying token)
    getProfile: builder.query<GetProfileResponse, void>({
      query: () => '/admin/profile', // adjust if your API has this endpoint
      providesTags: ['Auth'],
    }),

    // Logout (optional – you can also just clear local state)
    logout: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: '/admin/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useLoginMutation, useGetProfileQuery, useLogoutMutation } = authApi;
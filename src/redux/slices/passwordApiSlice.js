import apiSlice from "./apiSlice";

// Define the API slice
export const passwordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
        query: ({ token, newPassword }) => ({
          url: `/auth/reset-password/${token}`,
          method: 'POST',
          body: { newPassword },
        }),
      }),
  }),
});

// Export hooks for usage in functional components
export const { useForgotPasswordMutation, useResetPasswordMutation } = passwordApiSlice;

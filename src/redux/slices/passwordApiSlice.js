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
  }),
});

// Export hooks for usage in functional components
export const { useForgotPasswordMutation } = passwordApiSlice;

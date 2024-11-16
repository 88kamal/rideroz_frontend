/* eslint-disable no-unused-vars */
import apiSlice from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login', // Endpoint for login
        method: 'POST',
        body: credentials, // The data to be sent (email and password)
      }),
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Store token in localStorage after successful login
          localStorage.setItem('token', JSON.stringify(data.token));
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),
    logout: builder.mutation({
      queryFn: () => {
        // Custom logic for logging out (client-side)
        localStorage.removeItem('token');
        return { data: null }; // No need to send a request to the server
      },
    }),
    firstPasswordChange: builder.mutation({
      query: ({ id, passwordState }) => ({
        url: `/auth/first-password-change/${id}`,
        method: 'PUT',
        body: passwordState,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useFirstPasswordChangeMutation } = authApiSlice;
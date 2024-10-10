import apiSlice from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login', // Endpoint for login
        method: 'POST',
        body: credentials, // The data to be sent (email and password)
      }),
    }),
  }),
});

export const { useLoginMutation } = apiSlice;

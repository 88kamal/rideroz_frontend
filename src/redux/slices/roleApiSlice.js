import apiSlice from './apiSlice';

export const roleApi = apiSlice.injectEndpoints({
  tagTypes: ['Role'], // Define tag types for role-based caching

  endpoints: (builder) => ({
    // Mutation for adding a role
    addRole: builder.mutation({
      query: (roleData) => ({
        url: 'role/add-role',
        method: 'POST',
        body: roleData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Role'], // Invalidate role cache to refetch updated roles
      keepUnusedDataFor: 300, // Cache the result for 5 minutes (300 seconds)
      refetchOnMountOrArgChange: true, // Refetch when the component remounts
      refetchOnReconnect: true, // Refetch on browser reconnect
      refetchOnFocus: true, // Refetch when window/tab gains focus
    }),

    // Query for fetching roles
    getRoles: builder.query({
      query: () => ({
        url: 'role/get-role',
        method: 'GET',
      }),
      transformResponse : (data) => {
        return data?.roles || []
      },
      providesTags: ['Role'], // Provide tags for caching and invalidation
     // Automatically refetch options
     keepUnusedDataFor: 300, // Cache data for 5 minutes (300 seconds)
     refetchOnMountOrArgChange: true, // Automatically refetch when the component remounts
     refetchOnReconnect: true, // Automatically refetch when the browser regains connection
     refetchOnFocus: true, // Automatically refetch when the window/tab regains focus
    }),
  }),
});

// Export hooks for usage in functional components
export const { useAddRoleMutation, useGetRolesQuery } = roleApi;

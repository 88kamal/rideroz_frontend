import toast from 'react-hot-toast';
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
      transformResponse: (data) => {
        return data?.roles || [];
      },
      providesTags: ['Role'], // Provide tags for caching and invalidation
      // Automatically refetch options
      keepUnusedDataFor: 300, // Cache data for 5 minutes (300 seconds)
      refetchOnMountOrArgChange: true, // Automatically refetch when the component remounts
      refetchOnReconnect: true, // Automatically refetch when the browser regains connection
      refetchOnFocus: true, // Automatically refetch when the window/tab regains focus
    }),

    // Mutation for editing a role
    editRole: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `role/edit-role/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
      // Invalidate the cache to refetch roles after the update
      invalidatesTags: ['Role'],
      // Use onQueryStarted for optimistic updates or side effects
      async onQueryStarted({ id, updatedData }, { dispatch, queryFulfilled }) {
        // Optimistic update for roles list
        const patchResult = dispatch(
          roleApi.util.updateQueryData('getRoles', undefined, (draft) => {
            const role = draft.find((r) => r._id === id);
            if (role) {
              Object.assign(role, updatedData); // Update role optimistically
            }
          })
        );
        try {
          await queryFulfilled; // Wait for the mutation to be fulfilled
        } catch (error) {
          // Revert the optimistic update if the mutation fails
          patchResult.undo();
        }
      },
    }),

    // Mutation for deleting a role
    deleteRole: builder.mutation({
      query: (id) => ({
        url: `role/delete-role?id=${id}`,
        method: 'DELETE',
      }),
      // Invalidate the cache to refetch roles after deletion
      invalidatesTags: ['Role'],
      // Use onQueryStarted for optimistic updates or side effects
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        // Optimistic removal from roles list
        const patchResult = dispatch(
          roleApi.util.updateQueryData('getRoles', undefined, (draft) => {
            return draft.filter((role) => role._id !== id); // Remove the role optimistically
          })
        );
        try {
          const { data } = await queryFulfilled;
          toast.success(data?.message);
        } catch (error) {
          // Revert the optimistic update if the mutation fails
          patchResult.undo();
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const { useAddRoleMutation, useGetRolesQuery, useEditRoleMutation, useDeleteRoleMutation } = roleApi;

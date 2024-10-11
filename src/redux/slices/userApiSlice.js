import toast from 'react-hot-toast';
import apiSlice from './apiSlice';

// Define the API slice
export const userApi = apiSlice.injectEndpoints({
    tagTypes: ['User'],
    endpoints: (builder) => ({
        // Sign up user
        signUpUser: builder.mutation({
            query: (newUser) => ({
                url: '/user/signUp',
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ['User'],
        }),

        // Get users with search, pagination, and filtering
        getUsers: builder.query({
            query: ({ search = '', page = 1, limit = 10 }) => ({
                url: '/user/get-users',
                params: { search, page, limit },
            }),
            providesTags: (result) =>
                result
                    ? [...result.users.map(({ _id }) => ({ type: 'User', id: _id })), { type: 'User', id: 'LIST' }]
                    : [{ type: 'User', id: 'LIST' }],
            keepUnusedDataFor: 300,
            refetchOnMountOrArgChange: true,
            refetchOnReconnect: true,
            refetchOnFocus: true,
        }),

        // Edit user
        editUser: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `/user/edit-user/${id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
            onQueryStarted: async ({ id, updatedData }, { dispatch, queryFulfilled }) => {
                // Perform optimistic update
                const patchResult = dispatch(
                    userApi.util.updateQueryData('getUsers', undefined, (draft) => {
                        const userToUpdate = draft.users.find((user) => user._id === id);
                        if (userToUpdate) {
                            Object.assign(userToUpdate, updatedData);
                        }
                    })
                );
                try {
                    await queryFulfilled;
                } catch {
                    // Undo the optimistic update if the mutation fails
                    patchResult.undo();
                }
            },
        }),

        // Delete user
        deleteUser: builder.mutation({
            query: (id) => ({
              url: `/user/delete-user/${id}`,
              method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'User', id }],
            
            // Use onQueryStarted to optimistically update the UI
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
              // Optimistically update the cache to remove the deleted user
              const patchResult = dispatch(
                userApi.util.updateQueryData('getUsers', undefined, (draft) => {
                  return {
                    ...draft,
                    users: draft.users.filter(user => user._id !== id)
                  };
                })
              );
              
              try {
                // Wait for the query to finish (the actual server response)
               const {data} = await queryFulfilled;
               toast.success(data?.message);
              } catch (err) {
                // If the deletion fails, roll back the optimistic update
                toast.error(err?.error?.data?.error);
                patchResult.undo();
              }
            }
          })
          
    }),
});

// Export hooks for usage in components
export const {
    useSignUpUserMutation,
    useGetUsersQuery,
    useEditUserMutation,
    useDeleteUserMutation,
} = userApi;

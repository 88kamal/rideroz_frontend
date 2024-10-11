import toast from "react-hot-toast";
import apiSlice from "./apiSlice";

// Define the base API slice
export const departmentApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Department'], // Define the tags for cache invalidation
  endpoints: (builder) => ({
    // Get departments query
    getDepartments: builder.query({
      query: () => '/department/get-departments', // API endpoint
      transformResponse: (data) => data.departments,
      providesTags: ['Department'], // Tags for cache invalidation
      keepUnusedDataFor: 300, // Cache data for 5 minutes (300 seconds)
      refetchOnMountOrArgChange: true, // Automatically refetch when the component remounts
      refetchOnReconnect: true, // Automatically refetch when the browser regains connection
      refetchOnFocus: true, // Automatically refetch when the window/tab regains focus
    }),

    // Add department mutation
    addDepartment: builder.mutation({
      query: (newDepartment) => ({
        url: '/department/add-department',
        method: 'POST',
        body: newDepartment,
      }),
      // Invalidate tags to automatically refetch departments after adding a new one
      invalidatesTags: ['Department'],
    }),

    // Edit department mutation
    editDepartment: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/department/edit-department/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
      // Invalidate tags to refetch departments after editing
      invalidatesTags: ['Department'],
      // Use onQueryStarted for optimistic updates or handling side effects
      async onQueryStarted({ id, updatedData }, { dispatch, queryFulfilled }) {
        // Optimistic update
        const patchResult = dispatch(
          departmentApiSlice.util.updateQueryData('getDepartments', undefined, (draft) => {
            const department = draft.find(dept => dept._id === id);
            if (department) {
              Object.assign(department, updatedData);
            }
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          // Revert the optimistic update if the request fails
          patchResult.undo();
        }
      },
    }),

    // Delete department mutation
    deleteDepartment: builder.mutation({
      query: (id) => ({
        url: `/department/delete-department?id=${id}`,
        method: 'DELETE',
      }),
      // Invalidate tags to refetch departments after deletion
      invalidatesTags: ['Department'],
      // Use onQueryStarted for optimistic updates or handling side effects
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        // Optimistic update
        const patchResult = dispatch(
          departmentApiSlice.util.updateQueryData('getDepartments', undefined, (draft) => {
            return draft.filter(dept => dept._id !== id); // Remove the department optimistically
          })
        );
        try {
          const { data } = await queryFulfilled;
          toast.success(data?.message);
        } catch (error) {
          toast.error(error?.error?.data?.error);
          // Revert the optimistic update if the request fails
          patchResult.undo();
        }
      },
    }),
  }),
});

// Export the auto-generated hooks for the queries and mutations
export const {
  useGetDepartmentsQuery,
  useAddDepartmentMutation,
  useEditDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApiSlice;

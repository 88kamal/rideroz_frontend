
import apiSlice from "./apiSlice";

// Define the base API slice
export const departmentApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Department'], // Define the tags for cache invalidation
  endpoints: (builder) => ({
    // Get departments query
    getDepartments: builder.query({
      query: () => '/department/get-departments', // API endpoint
      transformResponse : (data) => data.departments,
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
  }),
});

// Export the auto-generated hook for the query and mutation
export const { useGetDepartmentsQuery, useAddDepartmentMutation } = departmentApiSlice;

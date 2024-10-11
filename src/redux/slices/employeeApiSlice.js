import toast from "react-hot-toast";
import apiSlice from "./apiSlice";

export const employeeApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Employee'], // Define the tag type for tracking employee data

  endpoints: (builder) => ({
    // Add Employee Mutation
    addEmployee: builder.mutation({
      query: (employeeData) => ({
        url: '/employee/add-employee',
        method: 'POST',
        body: employeeData,
      }),
      invalidatesTags: [{ type: 'Employee', id: 'LIST' }], // Invalidate employee list to refetch

      // Handle optimistic update
      onQueryStarted: async (employeeData, { dispatch, queryFulfilled }) => {
        // Optimistically update cache
        const patchResult = dispatch(
          employeeApiSlice.util.updateQueryData('getEmployees', undefined, (draft) => {
            draft.employees.push({
              ...employeeData, // Include the employee data optimistically
              id: Math.random().toString(36).substr(2, 9), // Generate a temporary ID
            });
          })
        );

        try {
          // Wait for the mutation to complete
          await queryFulfilled;
          console.log('Employee added successfully!');
        } catch (error) {
          // Revert optimistic update if addition fails
          patchResult.undo();
          console.error('Error adding employee:', error);
        }
      },
    }),

    // Get Employees Query
    getEmployees: builder.query({
      query: ({ search = "", page = 1, limit = 10, department, role }) => ({
        url: `/employee/get-employees`,
        params: { search, page, limit, department, role },
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.employees.map(({ id }) => ({ type: 'Employee', id })),
            { type: 'Employee', id: 'LIST' },
          ]
          : [{ type: 'Employee', id: 'LIST' }],
      keepUnusedDataFor: 300, // Keep data for 5 minutes when unused
      refetchOnMountOrArgChange: true, // Refetch when arguments change
      refetchOnReconnect: true, // Refetch on network reconnect
      refetchOnFocus: true, // Refetch when window is refocused
    }),

    // Delete Employee Mutation
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employee/delete-employee/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Employee', id: 'LIST' }], // Invalidate employee list to refetch

      // Handle optimistic update
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        // Optimistically update cache
        const patchResult = dispatch(
          employeeApiSlice.util.updateQueryData('getEmployees', undefined, (draft) => {
            return {
              ...draft,
              employees: draft.employees.filter((employee) => employee.id !== id),
            };
          })
        );

        try {
          // Wait for the mutation to complete
          const { data } = await queryFulfilled;

          toast.success(data?.message);
        } catch (error) {
          // Revert optimistic update if deletion fails
          patchResult.undo();
          toast.error(error?.error?.data?.error);
          console.log('Error deleting employee:', error);
        }
      },
    }),

  }),
});

export const {
  useAddEmployeeMutation,
  useGetEmployeesQuery,
  useDeleteEmployeeMutation
} = employeeApiSlice;

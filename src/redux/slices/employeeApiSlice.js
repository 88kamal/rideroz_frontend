import apiSlice from "./apiSlice";

export const employeeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addEmployee: builder.mutation({
      query: (employeeData) => ({
        url: '/employee/add-employee',
        method: 'POST',
        body: employeeData,
      }),
    }),
  }),
});

export const { useAddEmployeeMutation } = apiSlice;

import apiSlice from "./apiSlice";

// Define your API slice
export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: ({ vehicleId, body }) => ({
        url: `/order/create-order/${vehicleId}`,
        method: 'POST',
        body,
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: ['Order'], // Invalidate Order tag on create
      keepUnusedDataFor: 300,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),
    verifyPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/payment/verify',
        method: 'PUT',
        body: paymentData,
      }),
      invalidatesTags: ['Order'], // Invalidate Order tag on payment verification
      keepUnusedDataFor: 300,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),
    getOrders: builder.query({
      query: () => ({
        url: '/order/get-orders', // API endpoint
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result) =>
        result?.orders
          ? result.orders.map(({ _id }) => ({ type: 'Order', id: _id })) // Update based on orders
          : [{ type: 'Order' }],
      keepUnusedDataFor: 300, // Cache data for 5 minutes
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),
    getOrderById: builder.query({
      query: (orderId) => ({
        url: `/order/get-order/${orderId}`,
        method: 'GET',
        credentials: 'include', // Include credentials if required for authentication
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: (result, error, orderId) => 
        result ? [{ type: 'Order', id: orderId }] : [{ type: 'Order' }],
      keepUnusedDataFor: 300, // Cache data for 5 minutes
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),
  }),
});

export const { useCreateOrderMutation, useVerifyPaymentMutation, useGetOrdersQuery, useGetOrderByIdQuery } = orderApiSlice;

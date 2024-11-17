import apiSlice from "./apiSlice";

// Define your API slice
export const orderApiSlice = apiSlice.injectEndpoints({
  tagTypes: "Order",
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
    // getOrdersByShop: builder.query({
    //   query: (shopId) => `/order/get-orders/${shopId}`,
    //   providesTags: (result, error, shopId) =>
    //     result
    //       ? [
    //         // If the query returns data, tag it with the shop ID for caching
    //         { type: 'Order', id: shopId },
    //         ...result.orders.map(({ _id }) => ({ type: 'Order', id: _id })),
    //       ]
    //       : [{ type: 'Order', id: shopId }],
    //   keepUnusedDataFor: 60, // Data remains cached for 60 seconds after the component using it unmounts
    //   refetchOnFocus: true, // Automatically refetch when the app regains focus
    //   refetchOnReconnect: true, // Automatically refetch when the app reconnects to the internet
    //   refetchOnMountOrArgChange: true, // Refetch when the query argument changes or the component remounts
    // }),
    // getOrdersByShop: builder.query({
    //   query: ({ shopId, status, settled,  }) => {
    //     // console.log({
    //     //   shopId, status, settled, 
    //     // })
    //     // Build the query string dynamically
    //     const queryParams = new URLSearchParams();
    //     if (status) queryParams.append('status', status);
    //     if (settled !== undefined) queryParams.append('settled', settled);
    
    //     // Construct the final URL
    //     return `/order/get-orders/${shopId}?${queryParams.toString()}`;
    //   },
    //   providesTags: (result, error, { shopId }) =>
    //     result
    //       ? [
    //           { type: 'Order', id: shopId },
    //           ...result.orders.map(({ _id }) => ({ type: 'Order', id: _id })),
    //         ]
    //       : [{ type: 'Order', id: shopId }],
    //   keepUnusedDataFor: 60, // Cache duration
    //   refetchOnFocus: true,
    //   refetchOnReconnect: true,
    //   refetchOnMountOrArgChange: true,
    // }),

    getOrdersByShop: builder.query({
      query: ({ shopId, status, settled, startDate, endDate, limit, page }) => {
        // Build the query string dynamically
        const queryParams = new URLSearchParams();
        if (status) queryParams.append('status', status);
        if (settled !== undefined) queryParams.append('settled', settled);
        if (startDate) queryParams.append('startDate', startDate);
        if (endDate) queryParams.append('endDate', endDate);
        queryParams.append('limit', limit);
        queryParams.append('page', page);
    
        // Construct the final URL
        return `/order/get-orders/${shopId}?${queryParams.toString()}`;
      },
      providesTags: (result, error, { shopId }) =>
        result
          ? [
              { type: 'Order', id: shopId },
              ...result.orders.map(({ _id }) => ({ type: 'Order', id: _id })),
            ]
          : [{ type: 'Order', id: shopId }],
      keepUnusedDataFor: 60, // Cache duration
      refetchOnFocus: true,
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true,
    }),
    
    
  }),
});

export const { useCreateOrderMutation, useVerifyPaymentMutation, useGetOrdersQuery, useGetOrderByIdQuery, useGetOrdersByShopQuery } = orderApiSlice;

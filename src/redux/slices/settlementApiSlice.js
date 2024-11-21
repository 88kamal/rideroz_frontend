// import apiSlice from "./apiSlice";

// export const settlementApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         settleOrder: builder.mutation({
//             query: ({ orderId, formData }) => ({
//                 url: `/shopPayment/settle/${orderId}`,
//                 method: 'POST',
//                 body: formData,
//             }),
//         }),
//     }),
// });

// export const { useSettleOrderMutation } = settlementApiSlice;

import apiSlice from "./apiSlice";

export const settlementApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        settleOrder: builder.mutation({
            query: ({ orderId, formData }) => ({
                url: `/shopPayment/settle/${orderId}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: [{ type: 'Settlement', id: 'LIST' }],
            keepUnusedDataFor: 3600, // Data remains in cache for 1 hour
            refetchOnMountOrArgChange: true, // Refetch when the component remounts or args change
            refetchOnReconnect: true, // Refetch when the network reconnects
            refetchOnFocus: true, // Refetch when the app regains focus
        }),
    }),
    tagTypes: ['Settlement'], // Tag type for caching and invalidation
});

export const { useSettleOrderMutation } = settlementApiSlice;

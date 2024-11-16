import apiSlice from "./apiSlice";

export const settlementApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        settleOrder: builder.mutation({
            query: ({ orderId, formData }) => ({
                url: `/shopPayment/settle/${orderId}`,
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const { useSettleOrderMutation } = settlementApiSlice;

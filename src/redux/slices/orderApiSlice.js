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
                    'Content-Type': 'application/json',
                },
            }),
        }),
        verifyPayment: builder.mutation({
            query: (paymentData) => ({
              url: '/payment/verify',
              method: 'PUT',
              body: paymentData,
            }),
          }),
    }),
});

export const { useCreateOrderMutation, useVerifyPaymentMutation } = orderApiSlice;

import apiSlice from './apiSlice';

export const shopApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addShop: builder.mutation({
            query: (shopData) => ({
                url: '/shop/add-shop',
                method: 'POST',
                body: shopData,
                formData: true,
            }),
            // eslint-disable-next-line no-unused-vars
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    // You can optimistically update the state or perform any side effect here
                    const { data } = await queryFulfilled;
                    // Dispatch any additional actions if necessary
                    console.log('Add shop successful:', data);
                } catch (error) {
                    // Handle any errors that occur during the query
                    console.error('Add shop failed:', error);
                }
            },
        }),
    }),
    // Enable refetch on reconnect
    refetchOnReconnect: true,
});

export const { useAddShopMutation } = shopApi;

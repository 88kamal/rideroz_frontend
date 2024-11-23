import toast from 'react-hot-toast';
import apiSlice from './apiSlice';

export const shopApi = apiSlice.injectEndpoints({
    tagTypes: ['Shop'],  // Define tagTypes for cache invalidation
    endpoints: (builder) => ({
        // Add Shop mutation
        addShop: builder.mutation({
            query: (shopData) => ({
                url: '/shop/add-shop',
                method: 'POST',
                body: shopData,
                formData: true,
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                // Optimistic cache update: patch the shop list before the mutation completes
                const patchResult = dispatch(
                    shopApi.util.updateQueryData('getShops', undefined, (draft) => {
                        // Add the new shop optimistically to the cache
                        draft.push(arg); // Assuming `arg` contains the new shop data
                    })
                );

                try {
                    // Await the actual API call
                    const { data } = await queryFulfilled;
                    console.log('Add shop successful:', data);
                } catch (error) {
                    console.error('Add shop failed:', error);

                    // Rollback the optimistic cache update if the mutation fails
                    patchResult.undo();
                }
            },
            invalidatesTags: ['Shop'], // Invalidate cache to refetch the shop list after mutation
        }),


        // Fetch Shops query
        getShops: builder.query({
            query: ({ search = "", page = 1, limit = 10, city }) => ({
                url: `/shop/get-shops`,
                method: 'GET',
                params: { search, page, limit, city },  // Query parameters for search, pagination, and city filter
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
            transformResponse: (response) => ({
                shops: response.shops, // Array of shops
                totalShops: response.totalShops, // Total number of shops
            }),
            providesTags: (result) =>
                result?.shops
                    ? result.shops.map(({ _id }) => ({ type: 'Shop', id: _id }))
                    : [{ type: 'Shop' }],
            keepUnusedDataFor: 3600,  // Cache data for 5 minutes
            refetchOnMountOrArgChange: true,
            refetchOnReconnect: true,
            refetchOnFocus: true,
        }),

        // Edit Shop mutation
        editShop: builder.mutation({
            query: ({ id, updatedData }) => {
                console.log("63 updatedData", updatedData)
                return {
                    url: `/shop/edit-shop/${id}`,
                    method: 'PUT',
                    body: updatedData,
                    formData: true,
                    headers: {
                        "auth-token": JSON.parse(localStorage.getItem("token")),
                    },
                };
            },
            onQueryStarted: async ({ id, updatedData }, { dispatch, queryFulfilled }) => {
                // Optimistically update the cache
                const patchResult = dispatch(
                    shopApi.util.updateQueryData('getShops', undefined, (draft) => {
                        const shopToUpdate = draft.find((shop) => shop.id === id);
                        if (shopToUpdate) {
                            // Optimistically update the shop data with updatedData
                            Object.assign(shopToUpdate, updatedData);
                        }
                    })
                );

                try {
                    const { data } = await queryFulfilled;
                    console.log('Edit shop successful:', data);
                } catch (error) {
                    console.error('Edit shop failed:', error);

                    // Rollback the optimistic cache update if the mutation fails
                    patchResult.undo();
                }
            },
            invalidatesTags: (result, error, { id }) => [{ type: 'Shop', id }],
        }),


        // Delete Shop mutation
        deleteShop: builder.mutation({
            query: (id) => ({
                url: `/shop/delete-shop/${id}`,
                method: 'DELETE',
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                // Optimistic cache update: remove the shop from the cache before the mutation completes
                const patchResult = dispatch(
                    shopApi.util.updateQueryData('getShops', undefined, (draft) => {
                        // Remove the shop with the specified ID optimistically
                        return draft.filter((shop) => shop.id !== arg);
                    })
                );

                try {
                    const { data } = await queryFulfilled;
                    toast.success(data?.message);
                } catch (error) {
                    // Rollback the optimistic cache update if the mutation fails
                    patchResult.undo();
                    toast.error(error?.error?.data?.error);
                    console.error('Delete shop failed:', error);
                }
            },
            invalidatesTags: (result, error, { id }) => [{ type: 'Shop', id }],
        }),

        verifyShopOwner: builder.mutation({
            query: (shopId) => ({
                url: `/shop/shop-owner-account-verify/${shopId}`,
                method: 'PUT',
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
            invalidatesTags: ['Shop'], // Invalidate cache if related data is used elsewhere
        }),
        deactivateShopByOwner: builder.mutation({
            query: (shopId) => ({
                url: `/shop/deactivate-shop-by-owner/${shopId}`,
                method: 'PUT',
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
        }),
        activateShopByOwner: builder.mutation({
            query: (shopId) => ({
                url: `/shop/activate-shop-by-owner/${shopId}`,
                method: 'PUT',
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
        }),
        deactivateShopByAdmin: builder.mutation({
            query: (shopId) => ({
                url: `/shop/deactivate-shop-by-admin/${shopId}`,
                method: 'PUT',
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
        }),
        activateShopByAdmin: builder.mutation({
            query: (shopId) => ({
                url: `/shop/activate-shop-by-admin/${shopId}`,
                method: 'PUT',
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
        }),
        getShopStats: builder.query({
            query: ({ shopId, year, month }) => ({
              url: `/shop/shop-stats/${shopId}?year=${year}&month=${month}`, // Add query parameters
              method: 'GET',
              headers: {
                "auth-token": JSON.parse(localStorage.getItem("token")),
            },
            }),
          }),
          
    }),
    refetchOnReconnect: true,  // Ensure data refetches when connection is restored
});

export const {
    useAddShopMutation,
    useGetShopsQuery,
    useEditShopMutation,
    useDeleteShopMutation,
    useVerifyShopOwnerMutation,
    useDeactivateShopByOwnerMutation,
    useActivateShopByOwnerMutation,
    useDeactivateShopByAdminMutation,
    useActivateShopByAdminMutation,
    useGetShopStatsQuery
} = shopApi;

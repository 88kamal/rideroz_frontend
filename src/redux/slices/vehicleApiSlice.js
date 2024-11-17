/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import apiSlice from "./apiSlice";

export const vehicleApi = apiSlice.injectEndpoints({
    tagTypes: ['Vehicle'], // Define the tag type for caching and invalidation
    endpoints: (builder) => ({
        addVehicle: builder.mutation({
            query: (vehicleData) => ({
                url: '/vehicle/add-vehicle',
                method: 'POST',
                body: vehicleData,
                headers: {
                    // Adjust for your authentication token
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            }),
            invalidatesTags: ['Vehicle'], // Invalidate Vehicle data to trigger refetch
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                // Optional: You can perform optimistic updates or handle side-effects here
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.error("Add Vehicle failed:", error);
                }
            },
        }),

        getVehicles: builder.query({
            query: ({ search = '', vehicleAvailability, vehicalType, shop }) => {
                const params = new URLSearchParams();
                if (search) params.append('search', search);
                if (vehicleAvailability) params.append('vehicleAvailability', vehicleAvailability);
                if (vehicalType) params.append('vehicalType', vehicalType);
                if (shop) params.append('shop', shop);

                return {
                    url: `/vehicle/get-vehicles?${params.toString()}`,
                    headers: {
                        "auth-token": JSON.parse(localStorage.getItem("token")),
                    },
                };
            },
            providesTags: ['Vehicle'], // Marks the data as cached under the 'Vehicle' tag
            keepUnusedDataFor: 60, // Keep data in cache for 60 seconds after the last component unmounts
            refetchOnFocus: true, // Refetch data when the window is focused
            refetchOnReconnect: true, // Refetch when the connection is re-established
            refetchOnMountOrArgChange: true, // Refetch when the component remounts or query argument changes
        }),


        updateVehicleAvailability: builder.mutation({
            query: ({ id, vehicleAvailability }) => ({
                url: `vehicle/update-availability/${id}`,
                method: 'PUT',
                body: { vehicleAvailability },
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['Vehicle'], // Will re-fetch the vehicles after update
        }),

        // getVehiclesNearby: builder.query({
        //     query: ({ lat, lng, maxDistance = 300, vehicleCity, vehicleType }) => {
        //         const params = new URLSearchParams();

        //         // Add query parameters
        //         if (lat && lng) {
        //             params.append('lat', lat);
        //             params.append('lng', lng);
        //             params.append('maxDistance', maxDistance);
        //         }

        //         if (vehicleCity) params.append('vehicleCity', vehicleCity);
        //         if (vehicleType) params.append('vehicleType', vehicleType);

        //         return `/vehicle/vehicles-nearby?${params.toString()}`;
        //     },
        // }),
        getVehiclesNearby: builder.query({
            query: ({ lat, lng, maxDistance, vehicleCity, vehicleType }) => {
                const params = new URLSearchParams();

                // Add query parameters
                if (lat && lng) {
                    params.append('lat', lat);
                    params.append('lng', lng);
                    params.append('maxDistance', maxDistance);
                }

                if (vehicleCity) params.append('vehicleCity', vehicleCity);
                if (vehicleType) params.append('vehicleType', vehicleType);

                return `/vehicle/vehicles-nearby?${params.toString()}`;
            },
            providesTags: ['Vehicle'],
            keepUnusedDataFor: 60,
            refetchOnFocus: true,
            refetchOnReconnect: true,
            refetchOnMountOrArgChange: true,
        }),
        // getVehicleById: builder.query({
        //     query: (id) => `/vehicle/get-vehicle/${id}`,
        //     transformResponse: (data) => data?.vehicle || [],
        // providesTags: ['Vehicle'], // Cache under the 'Vehicle' tag
        // keepUnusedDataFor: 60, // Keep data in cache for 60 seconds after the last component unmounts
        // refetchOnFocus: true, // Refetch data when the window is focused
        // refetchOnReconnect: true, // Refetch when the connection is re-established
        // refetchOnMountOrArgChange: true, // Refetch when the component remounts or query argument changes
        // }),
        getVehicleById: builder.query({
            query: (id) => `/vehicle/get-vehicle/${id}`,
            transformResponse: (data) => data?.vehicle || [],
            providesTags: (result, error, id) => [{ type: 'Vehicle', id }], // Use specific vehicle ID in cache
            keepUnusedDataFor: 60,
            refetchOnFocus: true,
            refetchOnReconnect: true,
            refetchOnMountOrArgChange: true,
        }),

        // addReview: builder.mutation({
        //     query: ({ vehicleId, rating, comment }) => ({
        //         url: `/vehicle/add-review/${vehicleId}`,
        //         method: 'POST',
        //         body: { rating, comment },
        //         credentials: 'include', // If you need to include cookies
        //         headers: {
        //             "auth-token": JSON.parse(localStorage.getItem("token")),
        //             'Content-Type': 'application/json',
        //         },
        //     }),
        //     invalidatesTags: ['Vehicle'], // This will trigger refetching of any queries providing the 'Vehicle' tag
        //     keepUnusedDataFor: 60, // Keep data in cache for 60 seconds after the last component unmounts
        //     refetchOnFocus: true, // Refetch data when the window is focused
        //     refetchOnReconnect: true, // Refetch when the connection is re-established
        //     refetchOnMountOrArgChange: true, // Refetch when the component remounts or query argument changes
        // }),
        addReview: builder.mutation({
            query: ({ vehicleId, rating, comment }) => ({
                url: `/vehicle/add-review/${vehicleId}`,
                method: 'POST',
                body: { rating, comment },
                credentials: 'include', // Include cookies if needed
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: (result, error, { vehicleId }) => [{ type: 'Vehicle', id: vehicleId }], // Invalidate only the specific vehicle's cache
            keepUnusedDataFor: 60, // Keep data in cache for 60 seconds
            refetchOnFocus: true,
            refetchOnReconnect: true,
            refetchOnMountOrArgChange: true,
        }),

        getVehicleRating: builder.query({
            query: (vehicleId) => `/vehicle/vehicle-rating/${vehicleId}`, // Define the endpoint
            // Invalidate cache for the specific vehicle's rating when needed
            invalidatesTags: (result, error, { vehicleId }) => [{ type: 'Vehicle', id: vehicleId }],
            // Keep data in cache for 60 seconds
            keepUnusedDataFor: 60,
            // Automatically refetch data on focus
            refetchOnFocus: true,
            // Automatically refetch data when reconnecting to the network
            refetchOnReconnect: true,
            // Automatically refetch data when the component is mounted or the argument changes
            refetchOnMountOrArgChange: true,
        }),
        deleteReview: builder.mutation({
            query: ({ vehicleId, reviewId }) => ({
                url: `/vehicle/delete-review/${vehicleId}/${reviewId}`,
                method: 'DELETE',
                credentials: 'include', // Include this if you have authentication tokens
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                    'Content-Type': 'application/json',
                },
            }),
            // Optional: Handle how to update the cache automatically after a successful delete operation
            onQueryStarted: async ({ vehicleId, reviewId }, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    // If deletion succeeds, you can invalidate the cache or update the state accordingly
                    dispatch(vehicleApi.util.invalidateTags([{ type: 'Vehicle', id: vehicleId }]));
                    toast.success(data?.message);
                } catch (error) {
                    console.error('Error while deleting review:', error);
                }
            },
        }),
        bookWalkin: builder.mutation({
            query: ({ vehicleId, startDate, endDate, startTime, endTime }) => ({
                url: `/vehicle/book-Walkin/${vehicleId}`,
                method: 'PUT',
                body: {
                    startDate,
                    endDate,
                    startTime,
                    endTime,
                },
            }),
        }),
        getVehicleAvailability: builder.query({
            query: ({ vehicleId, month, year }) =>
                `/availability/${vehicleId}?month=${month}&year=${year}`,
        }),

        // getVehiclesByShopId: builder.query({
        //     query: (shopId) => `/vehicle/get-vehicles-by-shop-id/${shopId}`,
        //     providesTags: ['Vehicle'], // Cache under the 'Vehicle' tag
        //     keepUnusedDataFor: 60, // Cache for 60 seconds after last unmount
        //     refetchOnFocus: true, // Refetch on window focus
        //     refetchOnReconnect: true, // Refetch on reconnect
        //     refetchOnMountOrArgChange: true, // Refetch on remount or argument change
        // }),
        getVehiclesByShopId: builder.query({
            query: ({ shopId, search = '', vehicleType, page = 1, limit = 10 }) => {
                console.log({
                    shopId, search, vehicleType, page, limit 
                })
              // Construct the query string with the provided parameters
              const queryParams = new URLSearchParams();
              if (search) queryParams.append('search', search);
              if (vehicleType) queryParams.append('vehicleType', vehicleType);
              queryParams.append('page', page);
              queryParams.append('limit', limit);
      
              // Construct the final URL
              return `/vehicle/get-vehicles-by-shop-id/${shopId}?${queryParams.toString()}`;
            },
            providesTags: (result, error, { shopId }) =>
              result
                ? [
                    { type: 'Vehicle', id: shopId },
                    ...result.vehicles.map(({ _id }) => ({ type: 'Vehicle', id: _id })),
                  ]
                : [{ type: 'Vehicle', id: shopId }],
            keepUnusedDataFor: 60, // Cache data for 60 seconds after last unmount
            refetchOnFocus: true, // Refetch on window focus
            refetchOnReconnect: true, // Refetch on reconnect
            refetchOnMountOrArgChange: true, // Refetch on remount or argument change
          }),


    }),
});

export const { useAddVehicleMutation, useGetVehiclesQuery, useUpdateVehicleAvailabilityMutation, useGetVehiclesNearbyQuery, useGetVehicleByIdQuery, useAddReviewMutation, useGetVehicleRatingQuery, useDeleteReviewMutation, useBookWalkinMutation, useGetVehiclesByShopIdQuery } = vehicleApi;

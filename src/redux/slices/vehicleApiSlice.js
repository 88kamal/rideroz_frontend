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

                return `/vehicle/get-vehicles?${params.toString()}`;
            },
            providesTags: ['Vehicle'], // Marks the data as cached under the Vehicle tag
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
        //     query: ({ lat, lng, maxDistance }) => ({
        //       url: 'vehicle/vehicles-nearby',
        //       method: 'GET',
        //       params: { lat, lng, maxDistance },  // Passing query parameters
        //     }),
        //   }),

        getVehiclesNearby: builder.query({
            query: ({ lat, lng, maxDistance = 300, vehicleCity, vehicleType }) => {
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
        }),
        getVehicleById: builder.query({
            query: (id) => `/vehicle/get-vehicle/${id}`,
            transformResponse: (data) => data?.vehicle || [],
            providesTags: ['Vehicle'], // Cache under the 'Vehicle' tag
            keepUnusedDataFor: 60, // Keep data in cache for 60 seconds after the last component unmounts
            refetchOnFocus: true, // Refetch data when the window is focused
            refetchOnReconnect: true, // Refetch when the connection is re-established
            refetchOnMountOrArgChange: true, // Refetch when the component remounts or query argument changes
        }),
    }),
});

export const { useAddVehicleMutation, useGetVehiclesQuery, useUpdateVehicleAvailabilityMutation, useGetVehiclesNearbyQuery, useGetVehicleByIdQuery } = vehicleApi;

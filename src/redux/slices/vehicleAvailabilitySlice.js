import apiSlice from "./apiSlice";

export const vehicleAvailabilitySlice = apiSlice.injectEndpoints({
    tagTypes: ["VehicleAvailability"], // Define tag types to be used for caching
    endpoints: (builder) => ({
        fetchVehicleAvailability: builder.query({
            query: ({ vehicleId, month }) => ({
                url: `vehicle/availability/${vehicleId}`,
                params: { month },
            }),
            providesTags: (result, error, { vehicleId }) => 
                result ? [{ type: "VehicleAvailability", id: vehicleId }] : [],
            keepUnusedDataFor : 3600, // Keep unused data in the cache for 60 seconds
            refetchOnFocus: true, // Refetch data when the component regains focus
            refetchOnReconnect: true, // Refetch data on reconnect
            refetchOnMountOrArgChange: true, // Refetch on mount or if arguments change
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                // Optional: perform additional actions when the query starts
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.error("Error fetching vehicle availability:", error);
                }
            },
        }),
    }),
});

// Export the hook for fetching vehicle availability
export const { useFetchVehicleAvailabilityQuery } = vehicleAvailabilitySlice;

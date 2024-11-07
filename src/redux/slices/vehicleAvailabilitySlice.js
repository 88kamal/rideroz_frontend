import apiSlice from "./apiSlice";

export const vehicleAvailabilitySlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchVehicleAvailability: builder.query({
            query: ({ vehicleId, month }) => ({
                url: `vehicle/availability/${vehicleId}`,
                params: { month },
            }),
        }),
    }),
});

export const { useFetchVehicleAvailabilityQuery } = vehicleAvailabilitySlice;

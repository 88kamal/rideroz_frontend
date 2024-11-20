import apiSlice from "./apiSlice";

export const deviceTokenSlice = apiSlice.injectEndpoints({
    tagTypes: ['DeviceToken'],
    endpoints: (builder) => ({
        saveDeviceToken: builder.mutation({
            query: (token) => ({
                url: '/deviceToken/save-deviceToken',
                method: 'POST',
                body: { token },
            }),
            invalidatesTags: ['DeviceToken'], // Invalidate related queries (if any) after saving the token
            extraOptions: {
                keepUnusedDataFor: 300, // Cache unused data for 5 minutes
                refetchOnMountOrArgChange: true, // Refetch data when the component mounts or arguments change
                refetchOnReconnect: true, // Refetch on network reconnection
                refetchOnFocus: true, // Refetch when the browser regains focus
            },
        }),
    }),
});

export const { useSaveDeviceTokenMutation } = deviceTokenSlice;

import apiSlice from './apiSlice';

// Define the API slice
export const cityApi = apiSlice.injectEndpoints({
  tagTypes: ['City'], // Define the tag type for cache invalidation
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => {
        return 'city/cities';
      },
      transformResponse : (data) => {
        return data?.cities || []
      },
      providesTags: ['City'],
      keepUnusedDataFor: 300, // Cache data for 5 minutes (300 seconds)
      refetchOnMountOrArgChange: true, // Automatically refetch when the component remounts
      refetchOnReconnect: true, // Automatically refetch when the browser regains connection
      refetchOnFocus: true, // Automatically refetch when the window/tab regains focus
    }),

    addCity: builder.mutation({
      query: (cityData) => {
        const formData = new FormData();
        formData.append('cityName', cityData.cityName);
        formData.append('cityState', cityData.cityState);

        if (cityData.cityImage) {
          formData.append('cityImage', cityData.cityImage);
        }

        return {
          url: 'city/add-city',
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['City'], // Invalidate 'City' tag to trigger a re-fetch of the data
    }),
  }),
});

// Export the auto-generated hooks for the 'getCities' query and 'addCity' mutation endpoints
export const { useGetCitiesQuery, useAddCityMutation } = cityApi;

// // import apiSlice from './apiSlice';

// // // Define the API slice
// // export const cityApi = apiSlice.injectEndpoints({
// //   tagTypes: ['GetCity'], // Define the tag type for cache invalidation
// //   endpoints: (builder) => ({
// //     getCities: builder.query({
// //       query: () => {
// //         return 'city/get-cities';
// //       },
// //       transformResponse: (data) => {
// //         return data?.cities || []
// //       },
// //       providesTags: ['GetCity'],
// //       keepUnusedDataFor: 300, // Cache data for 5 minutes (300 seconds)
// //       refetchOnMountOrArgChange: true, // Automatically refetch when the component remounts
// //       refetchOnReconnect: true, // Automatically refetch when the browser regains connection
// //       refetchOnFocus: true, // Automatically refetch when the window/tab regains focus
// //     }),

// //     addCity: builder.mutation({
// //       query: (cityData) => {
// //         const formData = new FormData();
// //         formData.append('cityName', cityData.cityName);
// //         formData.append('cityState', cityData.cityState);
    
// //         if (cityData.cityImage) {
// //           formData.append('cityImage', cityData.cityImage);
// //         }
    
// //         return {
// //           url: 'city/add-city',
// //           method: 'POST',
// //           body: formData,
// //         };
// //       },
// //       invalidatesTags: ['GetCity'], // Invalidate 'City' tag to trigger a re-fetch of the data
    
// //       onQueryStarted: async (cityData, { dispatch, queryFulfilled }) => {
// //         // Optimistically update the cache or state before the mutation request completes
// //         const optimisticCity = {
// //           id: Date.now(), // Temporary ID for optimistic update
// //           cityName: cityData.cityName,
// //           cityState: cityData.cityState,
// //           cityImage: cityData.cityImage || null,
// //         };
    
// //         // Optionally, dispatch an action to optimistically add the city to the store
// //         const patchResult = dispatch(
// //           cityApi.util.updateQueryData('getCities', undefined, (draft) => {
// //             draft.push(optimisticCity); // Add the new city to the cache
// //           })
// //         );
    
// //         try {
// //           const { data } = await queryFulfilled; // Wait for the mutation to complete
// //           console.log('City added successfully', data);
    
// //           // Optionally, you can dispatch another action to update the store with the actual response
// //         } catch (error) {
// //           console.error('Failed to add city', error);
// //           // Rollback the optimistic update if the request fails
// //           patchResult.undo();
// //         }
// //       },
// //     }),
    

// //     getCitiesForAdmin: builder.query({
// //       // Accept search, page, and limit as parameters for pagination
// //       query: ({ search = "", page = 1, limit = 10 } = {}) => {
// //         return {
// //           url: `city/get-cities-admin`,
// //           params: { search, page, limit },
// //         };
// //       },
// //       transformResponse: (data) => {
// //         return data || [];
// //       },
// //       providesTags: ['GetCity'],
// //       keepUnusedDataFor: 300, // Cache data for 5 minutes (300 seconds)
// //       refetchOnMountOrArgChange: true, // Automatically refetch when the component remounts
// //       refetchOnReconnect: true, // Automatically refetch when the browser regains connection
// //       refetchOnFocus: true, // Automatically refetch when the window/tab regains focus
// //     }),
// //   }),
// // });

// // // Export the auto-generated hooks for the 'getCities' query and 'addCity' mutation endpoints
// // export const { useGetCitiesQuery, useAddCityMutation, useGetCitiesForAdminQuery } = cityApi;


// import toast from 'react-hot-toast';
// import apiSlice from './apiSlice';

// // Define the API slice
// export const cityApi = apiSlice.injectEndpoints({
//   tagTypes: ['GetCity'], // Define the tag type for cache invalidation
//   endpoints: (builder) => ({
//     getCities: builder.query({
//       query: () => {
//         return 'city/get-cities';
//       },
//       transformResponse: (data) => {
//         return data?.cities || []
//       },
//       providesTags: ['GetCity'],
//       keepUnusedDataFor: 300, // Cache data for 5 minutes (300 seconds)
//       refetchOnMountOrArgChange: true, // Automatically refetch when the component remounts
//       refetchOnReconnect: true, // Automatically refetch when the browser regains connection
//       refetchOnFocus: true, // Automatically refetch when the window/tab regains focus
//     }),

//     addCity: builder.mutation({
//       query: (cityData) => {
//         const formData = new FormData();
//         formData.append('cityName', cityData.cityName);
//         formData.append('cityState', cityData.cityState);
    
//         if (cityData.cityImage) {
//           formData.append('cityImage', cityData.cityImage);
//         }
    
//         return {
//           url: 'city/add-city',
//           method: 'POST',
//           body: formData,
//         };
//       },
//       invalidatesTags: ['GetCity'], // Invalidate 'City' tag to trigger a re-fetch of the data
    
//       onQueryStarted: async (cityData, { dispatch, queryFulfilled }) => {
//         const optimisticCity = {
//           id: Date.now(),
//           cityName: cityData.cityName,
//           cityState: cityData.cityState,
//           cityImage: cityData.cityImage || null,
//         };
    
//         const patchResult = dispatch(
//           cityApi.util.updateQueryData('getCities', undefined, (draft) => {
//             draft.push(optimisticCity);
//           })
//         );
    
//         try {
//           const { data } = await queryFulfilled;
//           console.log('City added successfully', data);
//         } catch (error) {
//           console.error('Failed to add city', error);
//           patchResult.undo();
//         }
//       },
//     }),
    
//     getCitiesForAdmin: builder.query({
//       query: ({ search = "", page = 1, limit = 10 } = {}) => {
//         return {
//           url: `city/get-cities-admin`,
//           params: { search, page, limit },
//         };
//       },
//       transformResponse: (data) => {
//         return data || [];
//       },
//       providesTags: ['GetCity'],
//       keepUnusedDataFor: 300,
//       refetchOnMountOrArgChange: true,
//       refetchOnReconnect: true,
//       refetchOnFocus: true,
//     }),

//     deleteCity: builder.mutation({
//       query: (id) => ({
//         url: `city/delete-city`,
//         method: 'DELETE',
//         params: { id }, // Pass the city ID as a query parameter
//       }),
//       invalidatesTags: ['GetCity'], // Invalidate 'GetCity' tag to trigger a re-fetch
//       onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
//         // Optimistically remove the city from the cache before the request completes
//         const patchResult = dispatch(
//           cityApi.util.updateQueryData('getCities', undefined, (draft) => {
//             // Filter out the city with the matching ID
//             return draft.filter(city => city.id !== id);
//           })
//         );
    
//         try {
//           const { data } = await queryFulfilled; // Wait for the mutation to complete
//           console.log('City deleted successfully', data);
//           toast.success(data?.message);
//         } catch (error) {
//           console.log('Failed to delete city', error?.error?.data?.error);
//           toast.error(error?.error?.data?.error);
//           // Rollback the optimistic update if the request fails
//           patchResult.undo();
//         }
//       },
//     }),
    
//   }),
// });

// // Export the auto-generated hooks for the 'getCities', 'addCity', and 'deleteCity' endpoints
// export const {
//   useGetCitiesQuery,
//   useAddCityMutation,
//   useGetCitiesForAdminQuery,
//   useDeleteCityMutation,
// } = cityApi;


import toast from 'react-hot-toast';
import apiSlice from './apiSlice';

export const cityApi = apiSlice.injectEndpoints({
  tagTypes: ['GetCity'], 
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => 'city/get-cities',
      transformResponse: (data) => data?.cities || [],
      providesTags: ['GetCity'],
      keepUnusedDataFor: 300, 
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),


    // Add City 
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
      invalidatesTags: ['GetCity'],
      onQueryStarted: async (cityData, { dispatch, queryFulfilled }) => {
        const optimisticCity = {
          id: Date.now(),
          cityName: cityData.cityName,
          cityState: cityData.cityState,
          cityImage: cityData.cityImage || null,
        };
    
        const patchResult = dispatch(
          cityApi.util.updateQueryData('getCities', undefined, (draft) => {
            draft.push(optimisticCity);
          })
        );
    
        try {
          const { data } = await queryFulfilled;
          // console.log('City added successfully', data);
        } catch (error) {
          // console.error('Failed to add city', error);
          patchResult.undo();
        }
      },
    }),

    // Edit City 
    editCity: builder.mutation({
      query: ({ id, cityData }) => {
        console.log("276 id, cityData", id, cityData)
        const formData = new FormData();
        formData.append('cityName', cityData.cityName);
        formData.append('cityState', cityData.cityState);

        if (cityData.cityImage) {
          formData.append('cityImage', cityData.cityImage);
        }

        return {
          url: `city/edit-city/${id}`,
          method: 'PUT',
          body: formData,
        };
      },
      invalidatesTags: ['GetCity'], 
      onQueryStarted: async ({ id, cityData }, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          cityApi.util.updateQueryData('getCities', undefined, (draft) => {
            const cityIndex = draft.findIndex((city) => city.id === id);
            if (cityIndex !== -1) {
              draft[cityIndex] = { ...draft[cityIndex], ...cityData };
            }
          })
        );

        try {
          const { data } = await queryFulfilled;
          console.log('City updated successfully', data);
          // toast.success(data.message);
        } catch (error) {
          console.error('Failed to update city', error);
          patchResult.undo();
          // toast.error('Failed to update city');
        }
      },
    }),

    // Get Cities For Admin 
    getCitiesForAdmin: builder.query({
      query: ({ search = "", page = 1, limit = 10 } = {}) => ({
        url: `city/get-cities-admin`,
        params: { search, page, limit },
      }),
      transformResponse: (data) => data || [],
      providesTags: ['GetCity'],
      keepUnusedDataFor: 300,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),

    // Delete City 
    deleteCity: builder.mutation({
      query: (id) => ({
        url: `city/delete-city`,
        method: 'DELETE',
        params: { id },
      }),
      invalidatesTags: ['GetCity'],
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          cityApi.util.updateQueryData('getCities', undefined, (draft) => {
            return draft.filter(city => city.id !== id);
          })
        );
    
        try {
          const { data } = await queryFulfilled;
          // console.log('City deleted successfully', data);
          toast.success(data?.message);
        } catch (error) {
          // console.log('Failed to delete city', error?.error?.data?.error);
          toast.error(error?.error?.data?.error);
          patchResult.undo();
        }
      },
    }),

  }),
});

export const {
  useGetCitiesQuery,
  useAddCityMutation,
  useEditCityMutation, // Added hook for edit city
  useGetCitiesForAdminQuery,
  useDeleteCityMutation,
} = cityApi;

import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './slices/apiSlice';
import locationSlice from './slices/location/locationSlice';

const store = configureStore({
    reducer: {
        location : locationSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,  // Reducer for cityApi
        // [shopApi.reducerPath]: shopApi.reducer,  // Reducer for shopApi
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiSlice.middleware)  // Include cityApi middleware
            // .concat(shopApi.middleware), // Include shopApi middleware
});

export default store;

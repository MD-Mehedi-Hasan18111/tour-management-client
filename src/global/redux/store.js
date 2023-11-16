import { configureStore } from "@reduxjs/toolkit";
import { allReducers } from "./reducers";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
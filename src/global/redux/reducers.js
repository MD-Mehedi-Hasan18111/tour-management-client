import { persistReducer, persistStore } from "redux-persist";
import AuthReducer from "./features/Auth/AuthSlice";
import storageSession from "redux-persist/lib/storage/session";

const authConfig = {
  key: "auth",
  storage: storageSession,
};
const persistedAuthReducer = persistReducer(authConfig, AuthReducer);

export const allReducers = {
  auth: persistedAuthReducer,
};

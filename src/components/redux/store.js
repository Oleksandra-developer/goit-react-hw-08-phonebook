import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-reducer";
import phonebookReducer from "./phonebook/phonebook-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["token"],
};
const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);
export default { store, persistor };

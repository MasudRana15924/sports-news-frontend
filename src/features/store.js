import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import  loginReducer  from "./auth/loginSlice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import sportsSlice  from "./sports/allSportsSlice";
import  sportSlice  from "./sports/singleSportsSlice";
import relatedsportsSlice from './related/relatedSportSlice'
const persistConfig = {
  key: "authentication",
  storage
};
const middlewares = [];
if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, loginReducer);
const rootReducer = combineReducers({
  userDetails: persistedReducer,
  sports:sportsSlice,
  sport:sportSlice,
  related:relatedsportsSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
});

export default store;

export const persistor = persistStore(store);
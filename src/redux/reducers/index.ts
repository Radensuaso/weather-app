import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import queriesReducer from "./queriesReducer";
import forecastReducer from "./forecastReducer";
import watchListReducer from "./watchListReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPTED_PERSIST_KEY!,
    }),
  ],
};

const reducer = combineReducers({
  queries: queriesReducer,
  forecast: forecastReducer,
  watchList: watchListReducer,
});

const persistingReducer = persistReducer(persistConfig, reducer);

export default persistingReducer;

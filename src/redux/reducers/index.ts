import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import queriesReducer from "./queriesReducer";
import nextDaysReducer from "./nextDaysReducer";
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
  apiUrl: queriesReducer,
  nextDaysReducer: nextDaysReducer,
  watchList: watchListReducer,
});

const persistingReducer = persistReducer(persistConfig, reducer);

export default persistingReducer;

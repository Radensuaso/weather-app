import { AnyAction } from "redux";
import { FILL_FORECAST, LOADING, ERROR } from "../actions";
import initialState from "../initialState";

const forecastReducer = (state = initialState.forecast, action: AnyAction) => {
  switch (action.type) {
    case FILL_FORECAST:
      return {
        ...state,
        fullInfo: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default forecastReducer;

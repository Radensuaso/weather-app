import { AnyAction } from "redux";
import { METRIC_API, IMPERIAL_API, CHANGE_SEARCH } from "../actions";
import initialState from "../initialState";

const apiUrlReducer = (state = initialState.apiUrl, action: AnyAction) => {
  switch (action.type) {
    case METRIC_API:
      return {
        ...state,
        url: process.env.REACT_APP_API_METRIC,
      };
    case IMPERIAL_API:
      return {
        ...state,
        url: process.env.REACT_APP_API_IMPERIAL,
      };
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default apiUrlReducer;

import { AnyAction } from "redux";
import {
  FILL_EIGHT_DAYS,
  LOADING_EIGHT_DAYS,
  ERROR_EIGHT_DAYS,
} from "../actions";
import initialState from "../initialState";

const eightDaysReducer = (
  state = initialState.eightDays,
  action: AnyAction
) => {
  switch (action.type) {
    case FILL_EIGHT_DAYS:
      return {
        ...state,
        list: action.payload.list,
        city: action.payload.city,
      };
    case LOADING_EIGHT_DAYS:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR_EIGHT_DAYS:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default eightDaysReducer;

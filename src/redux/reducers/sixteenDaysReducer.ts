import { AnyAction } from "redux";
import { FILL_SIXTEEN_DAYS, LOADING, ERROR } from "../actions";
import initialState from "../initialState";

const sixteenDaysReducer = (
  state = initialState.sixteenDays,
  action: AnyAction
) => {
  switch (action.type) {
    case FILL_SIXTEEN_DAYS:
      return {
        ...state,
        list: action.payload.list,
        city: action.payload.city,
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

export default sixteenDaysReducer;

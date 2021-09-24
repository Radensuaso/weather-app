import { AnyAction } from "redux";
import { ADD_TO_WATCH_LIST, REMOVE_FROM_WATCH_LIST } from "../actions";
import initialState from "../initialState";

const watchListReducer = (
  state = initialState.watchList,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_TO_WATCH_LIST:
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case REMOVE_FROM_WATCH_LIST:
      return {
        ...state,
        cities: state.cities.filter((c) => c.city?.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default watchListReducer;

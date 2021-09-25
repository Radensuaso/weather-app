import { Dispatch } from "redux";
import ReduxStore from "../../types/ReduxStore";

export const METRIC_API = "METRIC_API";
export const IMPERIAL_API = "IMPERIAL_API";
export const FILL_NEXT_DAYS = "FILL_NEXT_DAYS";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const ADD_TO_WATCH_LIST = "ADD_TO_WATCH_LIST";
export const REMOVE_FROM_WATCH_LIST = "REMOVE_FROM_WATCH_LIST";
export const CHANGE_SEARCH = "CHANGE_SEARCH";

// Watch List
export const addToWatchList = (city: string) => ({
  type: ADD_TO_WATCH_LIST,
  payload: city,
});

export const removeFromWatchList = (city: string) => ({
  type: REMOVE_FROM_WATCH_LIST,
  payload: city,
});

//Change Url

export const changeToMetric = () => ({
  type: METRIC_API,
});

export const changeToImperial = () => ({
  type: IMPERIAL_API,
});

// Change query
export const changeSearch = (search: string) => ({
  type: CHANGE_SEARCH,
  payload: search,
});

// Fetch sixteen days forecast
export const fetchNextDays = (url: string, query: string) => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      const response = await fetch(
        `${url}q=${query ? query : "boliqueime"}&cnt=16`
      );
      if (response.ok) {
        const fetchedContent = await response.json();
        dispatch({
          type: FILL_NEXT_DAYS,
          payload: fetchedContent,
        });
        dispatch({
          type: ERROR,
          payload: false,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: ERROR,
          payload: true,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: true,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
};

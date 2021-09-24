import { Dispatch } from "redux";
import ReduxStore from "../../types/ReduxStore";

export const METRIC_API = "METRIC_API";
export const IMPERIAL_API = "IMPERIAL_API";
export const FILL_EIGHT_DAYS = "FILL_EIGHT_DAYS";
export const LOADING_EIGHT_DAYS = "LOADING_EIGHT_DAYS";
export const ERROR_EIGHT_DAYS = "ERROR_EIGHT_DAYS";
export const FILL_SIXTEEN_DAYS = "FILL_SIXTEEN_DAYS";
export const LOADING_SIXTEEN_DAYS = "LOADING_SIXTEEN_DAYS";
export const ERROR_SIXTEEN_DAYS = "ERROR_SIXTEEN_DAYS";
export const ADD_TO_WATCH_LIST = "ADD_TO_WATCH_LIST";
export const REMOVE_FROM_WATCH_LIST = "REMOVE_FROM_WATCH_LIST";

// Fetch eight days forecast
export const fetchEightDays = (url: any, query: string) => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    try {
      dispatch({
        type: LOADING_EIGHT_DAYS,
        payload: true,
      });

      const response = await fetch(`${url}q=${query}&cnt=8`);
      if (response.ok) {
        const fetchedContent = await response.json();
        dispatch({
          type: FILL_EIGHT_DAYS,
          payload: fetchedContent,
        });
        dispatch({
          type: ERROR_EIGHT_DAYS,
          payload: false,
        });
        dispatch({
          type: LOADING_EIGHT_DAYS,
          payload: false,
        });
      } else {
        dispatch({
          type: ERROR_EIGHT_DAYS,
          payload: true,
        });
        dispatch({
          type: LOADING_EIGHT_DAYS,
          payload: false,
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_EIGHT_DAYS,
        payload: true,
      });
      dispatch({
        type: LOADING_EIGHT_DAYS,
        payload: false,
      });
    }
  };
};

// Fetch sixteen days forecast
export const fetchSixteenDays = (url: any, query: string) => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    try {
      dispatch({
        type: LOADING_SIXTEEN_DAYS,
        payload: true,
      });

      const response = await fetch(`${url}q=${query}&cnt=16`);
      if (response.ok) {
        const fetchedContent = await response.json();
        dispatch({
          type: FILL_SIXTEEN_DAYS,
          payload: fetchedContent,
        });
        dispatch({
          type: ERROR_SIXTEEN_DAYS,
          payload: false,
        });
        dispatch({
          type: LOADING_SIXTEEN_DAYS,
          payload: false,
        });
      } else {
        dispatch({
          type: ERROR_SIXTEEN_DAYS,
          payload: true,
        });
        dispatch({
          type: LOADING_SIXTEEN_DAYS,
          payload: false,
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_SIXTEEN_DAYS,
        payload: true,
      });
      dispatch({
        type: LOADING_SIXTEEN_DAYS,
        payload: false,
      });
    }
  };
};

export const addToWatchList = (city: string) => ({
  type: ADD_TO_WATCH_LIST,
  payload: city,
});

export const removeFromWatchList = (city: string) => ({
  type: REMOVE_FROM_WATCH_LIST,
  payload: city,
});

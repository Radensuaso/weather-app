import State from "../../types/State";

const initialState: State = {
  apiUrl: process.env.REACT_APP_API_METRIC,
  eightDays: {
    list: [],
    city: null,
    loading: false,
    error: false,
  },
  sixteenDays: {
    list: [],
    city: null,
    loading: false,
    error: false,
  },
  watchList: {
    cities: [],
  },
};

export default initialState;

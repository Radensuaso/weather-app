import ReduxStore from "../../types/ReduxStore";

const initialState: ReduxStore = {
  queries: { apiUrl: process.env.REACT_APP_API_METRIC!, search: "" },
  forecast: {
    fullInfo: null,
    loading: false,
    error: false,
  },
  watchList: {
    cities: [],
  },
};

export default initialState;

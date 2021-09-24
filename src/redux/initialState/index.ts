import ReduxStore from "../../types/ReduxStore";

const initialState: ReduxStore = {
  apiUrl: { url: process.env.REACT_APP_API_METRIC!, search: "" },
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

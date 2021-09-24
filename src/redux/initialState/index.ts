import ReduxStore from "../../types/ReduxStore";

const initialState: ReduxStore = {
  apiUrl: { url: `${process.env.REACT_APP_ENCRYPTED_PERSIST_KEY}` },
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

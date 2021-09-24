import City from "./City";
import Day from "./Day";

interface State {
  apiUrl: any;
  eightDays: {
    list: Day[];
    city: null | City;
    loading: boolean;
    error: boolean;
  };
  sixteenDays: {
    list: Day[];
    city: null | City;
    loading: boolean;
    error: boolean;
  };
  watchList: {
    cities: City[];
  };
}

export default State;

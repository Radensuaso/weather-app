import City from "./City";
import Day from "./Day";

interface InnerStore {
  list: Day[];
  city: null | City;
  loading: boolean;
  error: boolean;
}

interface ReduxStore {
  apiUrl: { url: string; search: string };
  sixteenDays: InnerStore;
  watchList: { cities: InnerStore[] };
}

export default ReduxStore;

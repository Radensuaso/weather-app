import City from "./City";
import Day from "./Day";

export interface Queries {
  apiUrl: string;
  search: string;
}

export interface NextDays {
  list: Day[];
  city: null | City;
  loading: boolean;
  error: boolean;
}

export interface ReduxStore {
  queries: Queries;
  nextDays: NextDays;
  watchList: { cities: NextDays[] };
}

export default ReduxStore;

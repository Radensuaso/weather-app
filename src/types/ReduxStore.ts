import FullInfo from "./FullInfo";

export interface Queries {
  apiUrl: string;
  search: string;
}

export interface Forecast {
  fullInfo: FullInfo | null;
  loading: boolean;
  error: boolean;
}

export interface ReduxStore {
  queries: Queries;
  forecast: Forecast;
  watchList: { cities: number[] };
}

export default ReduxStore;

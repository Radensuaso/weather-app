import City from "./City";
import Day from "./Day";

interface FullInfo {
  cod: string;
  message: number;
  cnt: number;
  list: Day[];
  city: City;
}

export default FullInfo;

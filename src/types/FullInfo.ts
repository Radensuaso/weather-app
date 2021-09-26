import City from "./City";
import List from "./List";

interface FullInfo {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export default FullInfo;

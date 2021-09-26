import City from "./City";
import ListItem from "./ListItem";

interface FullInfo {
  cod: string;
  message: number;
  cnt: number;
  list: ListItem[];
  city: City;
}

export default FullInfo;

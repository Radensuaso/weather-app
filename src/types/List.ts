import MainInfo from "./MainInfo";
import Weather from "./Weather";
import Wind from "./Wind";

interface List {
  dt: number;
  main: MainInfo;
  weather: Weather[];
  clouds: {
    all: number;
  };
  wind: Wind;
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export default List;

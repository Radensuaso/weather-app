import MainInfo from "./MainInfo";
import Weather from "./Weather";
import Wind from "./Wind";

interface Day {
  dt: 1632484800;
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

export default Day;

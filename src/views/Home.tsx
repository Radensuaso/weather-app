import NextDaysRow from "../components/NextDaysRow";
import { useSelector } from "react-redux";
import ReduxStore from "../types/ReduxStore";

const Home = () => {
  const nextDays = useSelector((state: ReduxStore) => state.nextDays);
  return (
    <>
      <h1 className="text-center mb-4">Weather App</h1>
      <NextDaysRow nextDays={nextDays} />
    </>
  );
};

export default Home;

import NextDaysRow from "../components/NextDaysRow";
import { useSelector } from "react-redux";
import ReduxStore from "../types/ReduxStore";

const Home = () => {
  const nextDays = useSelector((state: ReduxStore) => state.nextDays);
  const apiUrl = useSelector((state: ReduxStore) => state.queries.apiUrl);
  const search = useSelector((state: ReduxStore) => state.queries.search);
  return (
    <>
      <h1 className="text-center mb-4">Weather App</h1>
      <NextDaysRow nextDays={nextDays} />
    </>
  );
};

export default Home;

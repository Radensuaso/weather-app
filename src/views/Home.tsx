import NextDaysRow from "../components/NextDaysRow";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ReduxStore from "../types/ReduxStore";
import { fetchNextDays } from "../redux/actions";

const Home = () => {
  const nextDays = useSelector((state: ReduxStore) => state.nextDays);
  const apiUrl = useSelector((state: ReduxStore) => state.queries.apiUrl);
  const search = useSelector((state: ReduxStore) => state.queries.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNextDays(apiUrl, search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1 className="text-center mb-4">Weather App</h1>
      <NextDaysRow nextDays={nextDays} />
    </>
  );
};

export default Home;

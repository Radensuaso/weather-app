import { Row } from "react-bootstrap";
import { NextDays } from "../types/ReduxStore";

interface NextDaysProps {
  nextDays: NextDays;
}

const NextDaysRow = ({ nextDays }: NextDaysProps) => {
  return <Row></Row>;
};

export default NextDaysRow;

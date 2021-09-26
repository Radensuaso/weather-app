import { ListGroup } from "react-bootstrap";
import Day from "../types/Day";

interface DayLisItemProps {
  day: Day;
}

const DayListItem = ({ day }: DayLisItemProps) => (
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
);

export default DayListItem;

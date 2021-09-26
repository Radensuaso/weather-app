import { ListGroup, Row, Col } from "react-bootstrap";
import { format, fromUnixTime } from "date-fns";
import List from "../types/List";

interface ForecastListItemProps {
  singleForecast: List;
}

const ForecastListItem = ({ singleForecast }: ForecastListItemProps) => (
  <ListGroup.Item>
    <Row>
      <Col>{format(fromUnixTime(singleForecast.dt), "E")}</Col>
    </Row>
  </ListGroup.Item>
);

export default ForecastListItem;

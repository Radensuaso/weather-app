import { ListGroup, Row, Col, Image } from "react-bootstrap";
import { format, fromUnixTime } from "date-fns";
import ListItem from "../types/ListItem";
import { useSelector } from "react-redux";
import ReduxStore from "../types/ReduxStore";

interface ForecastListItemProps {
  listItem: ListItem;
}

const ForecastListItem = ({ listItem }: ForecastListItemProps) => {
  const apiUrl = useSelector((state: ReduxStore) => state.queries.apiUrl);

  const tempUnit = apiUrl === process.env.REACT_APP_API_METRIC ? "ºC" : "ºF";

  return (
    <ListGroup.Item>
      <Row>
        <Col>{format(fromUnixTime(listItem.dt), "E, Pp")}</Col>
        <Col className="d-flex">
          <Image
            src={`http://openweathermap.org/img/w/${listItem.weather[0].icon}.png`}
          />
          <span>{}</span>
        </Col>
        <Col className="d-flex">
          <Image
            src={process.env.PUBLIC_URL + "assets/temp.png"}
            style={{ height: "2rem" }}
          />
          <span>{`${listItem.main.temp_min + tempUnit} / ${
            listItem.main.temp_max + tempUnit
          }`}</span>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ForecastListItem;

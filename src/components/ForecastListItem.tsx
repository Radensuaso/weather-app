import { ListGroup, Row, Col, Image } from "react-bootstrap";
import { format, fromUnixTime } from "date-fns";
import ListItem from "../types/ListItem";
import { useSelector } from "react-redux";
import ReduxStore from "../types/ReduxStore";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiStrongWind } from "react-icons/wi";

interface ForecastListItemProps {
  listItem: ListItem;
}

const ForecastListItem = ({ listItem }: ForecastListItemProps) => {
  const apiUrl = useSelector((state: ReduxStore) => state.queries.apiUrl);

  const tempUnit = apiUrl === process.env.REACT_APP_API_METRIC ? "ºC" : "ºF";
  const windUnit = apiUrl === process.env.REACT_APP_API_METRIC ? "m/s" : "mph";

  return (
    <ListGroup.Item>
      <Row>
        <Col xs={6} md={3} className="forecast-list-item py-2">
          <span>{format(fromUnixTime(listItem.dt), "E, Pp")}</span>
        </Col>
        <Col xs={6} md={3} className="forecast-list-item py-2">
          <Image
            src={`http://openweathermap.org/img/w/${listItem.weather[0].icon}.png`}
            className="me-2"
          />
          <span>{listItem.weather[0].description}</span>
        </Col>
        <Col xs={6} md={3} className="forecast-list-item py-2">
          <span
            style={{ color: "orange", fontSize: "1.5rem" }}
            className="me-2"
          >
            <FaTemperatureHigh />
          </span>
          <span>{`${listItem.main.temp_min + tempUnit} / ${
            listItem.main.temp_max + tempUnit
          }`}</span>
        </Col>
        <Col xs={6} md={3} className="forecast-list-item py-2">
          <div>
            <span
              style={{ fontSize: "1.5rem" }}
              className="me-2 text-secondary"
            >
              <WiStrongWind />
            </span>
            <span>{`${listItem.wind.speed} ${windUnit}`}</span>
            <br />
            <span>{`Humidity: ${listItem.main.humidity}%`}</span>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ForecastListItem;

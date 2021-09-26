import { Alert, Col, ListGroup, Row } from "react-bootstrap";
import ForecastCard from "./ForecastCard";
import ForecastListItem from "./ForecastListItem";
import Loading from "./Loading";
import { Forecast } from "../types/ReduxStore";

interface ForecastRowProps {
  forecast: Forecast;
}

const ForecastRow = ({ forecast }: ForecastRowProps) => {
  return forecast.loading ? (
    <Loading />
  ) : forecast.error ? (
    <Alert variant="danger">Something went Wrong</Alert>
  ) : (
    <Row>
      <Col xs={12} md={8}>
        <h2>{`${forecast.fullInfo?.city.name}, ${forecast.fullInfo?.city.country}`}</h2>
      </Col>
      <Col xs={12} md={4}>
        <ForecastCard />
      </Col>
      <Col xs={12}>
        <ListGroup>
          {forecast.fullInfo?.list.map((listItem, i) => (
            <ForecastListItem key={i} listItem={listItem} />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ForecastRow;

import { Alert, Col, ListGroup, Row } from "react-bootstrap";
import { NextDays } from "../types/ReduxStore";
import DayCardLarge from "./DayCardLarge";
import Loading from "./Loading";

interface NextDaysProps {
  nextDays: NextDays;
}

const NextDaysRow = ({ nextDays }: NextDaysProps) => {
  return nextDays.loading ? (
    <Loading />
  ) : nextDays.error ? (
    <Alert variant="danger">Something went Wrong</Alert>
  ) : (
    <Row>
      <Col xs={12} md={8}>
        <h2>{nextDays.city?.name}</h2>
      </Col>
      <Col xs={12} md={4}>
        <DayCardLarge />
      </Col>
      <Col xs={12}>
        <ListGroup>
          {nextDays.list?.map((day) => (
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default NextDaysRow;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBarTop from "./components/NavBarTop";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarTop />
        <Container className="mt-5"></Container>
      </Router>
    </div>
  );
}

export default App;

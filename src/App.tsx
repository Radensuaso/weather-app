import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBarTop from "./components/NavBarTop";
import Home from "./views/Home";
import SixteenDays from "./views/SixteenDays";
import WatchList from "./views/WatchList";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarTop />
        <Container className="mt-5"></Container>
        <Route path="/" exact component={Home} />
        <Route path="/watchList" exact component={WatchList} />
        <Route path="/sixteenDays:cityId" exact component={SixteenDays} />
      </Router>
    </div>
  );
}

export default App;

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <Container>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;

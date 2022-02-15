import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Count from "./Count";
import Sidebar from "./Sidebar";
import Pokedex from "./Pokedex";
import { Container, Col, Row } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("app");
  return (
    <div className="" style={{backgroundColor: "red",}}>
      <Router>
        <Container fluid style={{margin:0, backgroundColor: "yellow", minHeight:'100vh' }}>
          <Row>
          
        <Sidebar />
        
        <Col xs="12" md="9" lg="10" style={{padding:0}}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/count" exact element={<Count/>} /> */}
          <Route path="/pokedex" exact element={<Pokedex />} />
        </Routes>
        </Col>
        </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;

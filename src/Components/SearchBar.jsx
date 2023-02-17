import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import FetchCitta from "./FetchCitta";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(``);
  const [clima, setClima] = useState({});
  const [searchQueryMid, setSearchQueryMid] = useState("");

  const startFetching = () => {
    console.log(clima);
    console.log(searchQueryMid);
    setSearchQuery(searchQueryMid);
  };
  return (
    <>
      <Row>
        <Row>
          <Col>
            <Form.Label>Scrivi il nome della tua citta:</Form.Label>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQueryMid}
                onChange={(e) => setSearchQueryMid(e.target.value)}
              />
              <Button onClick={() => startFetching()}>clickHere</Button>
            </Form.Group>
            <div>città selezionata: {searchQuery}</div>

            <div>{searchQuery}</div>
            <FetchCitta
              passoUrlAFetch={searchQuery}
              prendoRisultatoFetch={(risultatoFetch) =>
                setClima(risultatoFetch)
              }
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default HomePage;

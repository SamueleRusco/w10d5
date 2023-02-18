import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import FetchCitta from "./FetchCitta";
import ClimaCard from "./ClimaCard";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(``);
  const [clima, setClima] = useState({});

  return (
    <>
      <Row>
        <Col>
          <Form
            className="search-box"
            onSubmit={(e) => {
              e.preventDefault();
              setSearchQuery(e.target[0].value);
            }}
          >
            <Form.Group className="d-flex m-5">
              <Form.Control
                type="text"
                placeholder="Scrivi il nome della tua citta"
              />
              <Button className="button" type="submit">
                clickHere
              </Button>
            </Form.Group>
          </Form>
          {clima.main && <ClimaCard clima={clima} />}
          <FetchCitta
            passoUrlAFetch={searchQuery}
            prendoRisultatoFetch={(risultatoFetch) => setClima(risultatoFetch)}
          />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;

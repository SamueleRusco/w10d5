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
        <Row>
          <Col>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                setSearchQuery(e.target[0].value);
              }}
            >
              <Form.Label>Scrivi il nome della tua citta:</Form.Label>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search here"

                  //   onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit">clickHere</Button>
              </Form.Group>
            </Form>
            {clima.main && <ClimaCard clima={clima} />}
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

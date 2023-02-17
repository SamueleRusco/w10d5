import { Card, Button } from "react-bootstrap";

const ClimaCard = (clima) => {
  const climaProps = clima.clima;
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{climaProps.name}</Card.Title>
          <Card.Text>
            <h1>temperatura attuale:{climaProps.main.temp}°C</h1>
            <h3>temperatura percepita:{climaProps.main.feels_like}°C</h3>
            <p>
              <span>
                <div>temperatura massima:{climaProps.main.temp_max}°C</div>
              </span>
              <span>
                <div>temperatura minima:{climaProps.main.temp_min}°C</div>
              </span>
            </p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ClimaCard;

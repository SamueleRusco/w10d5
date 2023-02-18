import { Card, Button, Container } from "react-bootstrap";

const ClimaCard = (clima) => {
  const climaProps = clima.clima;
  const mainTemp = climaProps.main.temp;

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <i class="fa-solid fa-temperature-three-quarters"></i>
            {climaProps.name}
          </Card.Title>
          <Card.Text>
            <div>
              <h1 className="mainTemp">{Math.floor(mainTemp)}°C</h1>
            </div>
            <div>
              {mainTemp > 18 ? (
                <i class="fa-solid fa-temperature-sun"></i>
              ) : (
                <i class="fa-solid fa-temperature-snow"></i>
              )}
            </div>
            <p>
              <span>
                <div>
                  {Math.floor(climaProps.main.temp_max)}°C
                  <span>
                    {" "}
                    <i class="fa-solid fa-temperature-arrow-up"></i>
                  </span>
                </div>
              </span>
              <span>
                <div>
                  {Math.floor(climaProps.main.temp_min)}°C
                  <span>
                    {" "}
                    <i class="fa-solid fa-temperature-arrow-down"></i>
                  </span>
                </div>
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

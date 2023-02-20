import { Card, Button, Container, Image } from "react-bootstrap";

const ClimaCard = (clima) => {
  const climaProps = clima.clima;
  const mainTemp = climaProps.main.temp;

  return (
    <>
      <Card className="cardBody">
        <Card.Body>
          <Card.Title>
            {climaProps.name}
            {"__"}
            {mainTemp > 20 ? (
              <span>
                <i class="fa-solid fa-fire"></i>
              </span>
            ) : (
              <span>
                <i class="fa-regular fa-snowflake"></i>
              </span>
            )}
          </Card.Title>
          <Card.Text>
            <div>
              <h1 className="mainTemp">{Math.floor(mainTemp)}°C</h1>
            </div>

            <p>
              <span>
                <div>
                  {Math.floor(climaProps.main.temp_max)}°C
                  <span>
                    {" "}
                    <i class="fa-solid fa-temperature-arrow-up"></i>
                  </span>
                  <span>{"___"}</span>
                  {Math.floor(climaProps.main.temp_min)}°C
                  <span>
                    {" "}
                    <i class="fa-solid fa-temperature-arrow-down"></i>
                  </span>
                </div>
              </span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ClimaCard;

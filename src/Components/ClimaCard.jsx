const ClimaCard = (clima) => {
  const climaProps = clima.clima;
  return (
    <>
      <div>temperatura attuale:{climaProps.main.temp}</div>
      <div>temperatura percepita:{climaProps.main.feels_like}</div>
      <div>temperatura minima:{climaProps.main.temp_min}</div>
      <div>temperatura massima:{climaProps.main.temp_max}</div>
      <div>nuvole:{climaProps.clouds.all} %</div>
    </>
  );
};

export default ClimaCard;

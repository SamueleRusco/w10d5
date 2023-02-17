import { useEffect } from "react";

const FetchCitta = (props) => {
  const urlCitta = `http://api.openweathermap.org/geo/1.0/direct?q=${props.passoUrlAFetch}&limit=1&appid=a9466d5a6fc0162c8f3e9dbc128e05d9`;

  const fetchCompito = () => {
    if (props.passoUrlAFetch) {
      fetch(urlCitta)
        .then((response) => response.json())
        .then((coordinate) =>
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate[0].lat}&lon=${coordinate[0].lon}&appid=a9466d5a6fc0162c8f3e9dbc128e05d9&units=metric`
          )
        )
        .then((response) => response.json())
        .then((meteo) => props.prendoRisultatoFetch(meteo))
        // .then((data) => this.setState({ searchResult: data.Search }))
        .catch((e) => console.log(e));
    }
  };
  useEffect(() => {
    fetchCompito();
  }, [props.passoUrlAFetch]);
};

export default FetchCitta;

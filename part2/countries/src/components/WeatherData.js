import { useEffect, useState } from "react";
import axios from "axios";
import Info from "./Info";

const WeatherData = ({ city }) => {
  const api_key = process.env.REACT_APP_API_KEY; /*Add your API key*/
  const [weathers, setWeathers] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}&unit=m`
      )
      .then((response) => {
        setWeathers(response.data);
      });
  }, [api_key, city]);

  console.log(weathers);

  return (
    <>
      {weathers.current ? (
        <div>
          <h2>Weather in {city}</h2>
          <img src={weathers.current.weather_icons[0]} alt="weather-icon" />
          <h3>{weathers.current.weather_descriptions[0].toUpperCase()}</h3>
          <Info title="Date & Time" information={weathers.location.localtime} />
          <Info
            title="Temperature"
            information={weathers.current.temperature}
            symbol="°C"
          />
          <Info
            title="Wind Speed"
            information={weathers.current.wind_speed}
            symbol="Km/h"
          />
          <Info
            title="Wind Direction"
            information={weathers.current.wind_dir}
            symbol=""
          />
          <Info
            title="Humidity"
            information={weathers.current.humidity}
            symbol="%"
          />
          <Info
            title="Pressure"
            information={weathers.current.pressure}
            symbol="Pa"
          />
        </div>
      ) : (
        <p>Weather Details not available</p>
      )}
    </>
  );
};

export default WeatherData;

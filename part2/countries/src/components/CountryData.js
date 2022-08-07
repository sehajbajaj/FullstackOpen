import WeatherData from "./WeatherData";
import Info from "./Info";

const CountryData = ({ country }) => {
  return (
    <div>
      <h1>{country.name.official}</h1>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <Info title="Capital" information={country.capital} symbol="" />
      <Info title="Area" information={country.area} symbol="km2" />
      <Info title="Population" information={country.population} symbol="" />
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <WeatherData city={country.capital} />
    </div>
  );
};

export default CountryData;

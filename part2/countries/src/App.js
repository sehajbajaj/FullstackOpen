import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import CountryData from "./components/CountryData";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
    setShowCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };
  return (
    <div>
      <strong>
        Search Country: <input value={search} onChange={handleSearch} />
      </strong>
      {search === "" ? (
        <p>Search for a Country</p>
      ) : (
        <>
          {showCountries.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : (
            <>
              <br />
              <hr />
              <Countries
                showCountries={showCountries}
                setShowCountries={setShowCountries}
              />
            </>
          )}
          {search !== "" && showCountries.length === 1 ? (
            <CountryData country={showCountries[0]} />
          ) : null}
        </>
      )}
    </div>
  );
};
export default App;

const Countries = ({ showCountries, setShowCountries }) => {
  if (showCountries.length === 1) return null;
  console.log(showCountries);
  return showCountries.map((country) => (
    <>
      <div key={country.name.official}>
        {country.name.common}
        <span>
          <button onClick={() => setShowCountries([country])}>Show</button>
        </span>
        <hr />
      </div>
    </>
  ));
};

export default Countries;

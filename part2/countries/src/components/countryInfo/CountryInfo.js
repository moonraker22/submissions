const CountryInfo = ({ country }) => {
  const languages = Object.values(country.languages);
  console.log(languages);
  return (
    <div>
      <h2>Country Info</h2>
      <p>
        <strong>Country:</strong> {country.name.common}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
      <p>
        <strong>Languages:</strong>
      </p>
      <ul>
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <div style={{ height: "200px", width: "75%" }}>
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default CountryInfo;

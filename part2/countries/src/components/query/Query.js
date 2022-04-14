import { useState, useEffect } from "react";
import CountryInfo from "../countryInfo/CountryInfo";

const Query = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const url = `https://restcountries.com/v3.1/name/${query}`;
      const fetchCountries = async () => {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
      };
      fetchCountries();
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    if (countries.length > 10) {
      setError("Too many matches, specify another filter");
    } else {
      setError(null);
    }
  }, [countries]);

  useEffect(() => {
    if (query.length === 0) {
      setCountries([]);
    }
  }, [query]);
  return (
    <div>
      find countries{" "}
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <ul>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {query.length === 0 ? "please enter a country name" : ""}
        {countries.message && <div>{countries.message}</div>}

        {countries.length < 10
          ? countries.map((country) => (
              <li key={country.name.common}>{country.name.common}</li>
            ))
          : ""}
        {countries.length === 1 && !countries.message && (
          <CountryInfo country={countries[0]} />
        )}
      </ul>
    </div>
  );
};

export default Query;

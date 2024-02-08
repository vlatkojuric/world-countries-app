import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function Country() {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [showSearchIcon, setShowSearchIcon] = useState(true);

  const [sortByContinent, setSortByContinent] = useState("");

  const { isLoading, isError } = useQuery({
    queryKey: ["country-data"],
    queryFn: async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
      return response.data;
    },
  });

  if (isError) {
    return <h1>Sorry,data can not be loaded at this time</h1>;
  }

  if (isLoading) {
    return <h1>Data is loading...</h1>;
  }

  const filterCountries = countries?.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filterByAfrica = countries?.filter(
    (country) =>
      country.region === "Africa" &&
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );
  const filterByAmerica = countries?.filter(
    (country) =>
      country.region === "Americas" &&
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );
  const filterByAsia = countries?.filter(
    (country) =>
      country.region === "Asia" &&
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );
  const filterByEurope = countries?.filter(
    (country) =>
      country.region === "Europe" &&
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );
  const filterByOceania = countries?.filter(
    (country) =>
      country.region === "Oceania" &&
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleInputChange(event) {
    setSearchValue(event.target.value);

    setShowSearchIcon(event.target.value === "");
  }

  return (
    <div>
      <div>
        <div className="inputSelectTop">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            className="searchInput"
            placeholder="Search for a country..."
          />
          <span className="searchIcon">{showSearchIcon && <SearchIcon />}</span>

          <select
            className="selectOption"
            defaultValue={sortByContinent}
            onChange={(event) => setSortByContinent(event.target.value)}
          >
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        {sortByContinent === "Filter by Region" && (
          <div className="countryDisplay">
            {filterCountries.map((country) => (
              <div key={country.cca2}>
                <Link to={`/details/${country.cca2}`}>
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    height={200}
                    width={300}
                  />
                  <h3>{country.name.common}</h3>
                  <p>{country.region}</p>
                  <p>{country.population}</p>
                  <p>{country.capital}</p>
                </Link>
              </div>
            ))}
          </div>
        )}

        {sortByContinent === "Africa" && (
          <div className="countryDisplay">
            {filterByAfrica.map((country) => (
              <div key={country.cca2}>
                <Link to={`/details/${country.cca2}`}>
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    height={200}
                    width={300}
                  />
                  <h3>{country.name.common}</h3>
                  <p>{country.region}</p>
                  <p>{country.population}</p>
                  <p>{country.capital}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
        {sortByContinent === "Americas" && (
          <div className="countryDisplay">
            {filterByAmerica.map((country) => (
              <div key={country.cca2}>
                <Link to={`/details/${country.cca2}`}>
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    height={200}
                    width={300}
                  />
                  <h3>{country.name.common}</h3>
                  <p>{country.region}</p>
                  <p>{country.population}</p>
                  <p>{country.capital}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
        {sortByContinent === "Asia" && (
          <div className="countryDisplay">
            {filterByAsia.map((country) => (
              <div key={country.cca2}>
                <Link to={`/details/${country.cca2}`}>
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    height={200}
                    width={300}
                  />
                  <h3>{country.name.common}</h3>
                  <p>{country.region}</p>
                  <p>{country.population}</p>
                  <p>{country.capital}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
        {sortByContinent === "Europe" && (
          <div className="countryDisplay">
            {filterByEurope.map((country) => (
              <div key={country.cca2}>
                <Link to={`/details/${country.cca2}`}>
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    height={200}
                    width={300}
                  />
                  <h3>{country.name.common}</h3>
                  <p>{country.region}</p>
                  <p>{country.population}</p>
                  <p>{country.capital}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
        {sortByContinent === "Oceania" && (
          <div className="countryDisplay">
            {filterByOceania.map((country) => (
              <div key={country.cca2}>
                <Link to={`/details/${country.cca2}`}>
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    height={200}
                    width={300}
                  />
                  <h3>{country.name.common}</h3>
                  <p>{country.region}</p>
                  <p>{country.population}</p>
                  <p>{country.capital}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {!sortByContinent && (
        <div className="countryDisplay">
          {filterCountries?.map((country) => (
            <div key={country.cca2}>
              <Link to={`/details/${country.cca2}`}>
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  height={200}
                  width={300}
                />
                <h3>{country.name.common}</h3>
                <p>{country.region}</p>
                <p>{country.population}</p>
                <p>{country.capital}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  async function fetchCountries() {
    const response = await axios.get("https://restcountries.com/v3.1/all");

    if (response.status === 200) {
      setCountries(response.data);
    } else {
      console.error("Can not fetch data now :", response.status);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  const isLoading =
    countries.length === 0 ? <h1>Data is loading ...</h1> : null;

  function handleSubmit(event) {
    event.preventDefault();
  }

  const filteredCountries = countries?.filter((country) =>
    country.name.common.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div className="App">
      {isLoading}

      <form onSubmit={handleSubmit}>
        {!isLoading && (
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(event) => setSearchWord(event.target.value)}
          />
        )}
      </form>

      <div className="countryDisplay">
        {filteredCountries?.map((country) => (
          <Country
            key={country.cca2}
            image={country.flags.png}
            alt={country.flags.alt}
            name={country.name.common}
            region={country.region}
            population={country.population}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

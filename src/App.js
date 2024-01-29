import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="countryDisplay">
        {countries.map((country) => (
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

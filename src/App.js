import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="countryDisplay">
        {countries.map((country) => (
          <Country
            name={country.name.common}
            flag={country.flags.png}
            alt={country.flags.alt}
            key={country.cca2}
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

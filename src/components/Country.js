import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Country() {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["country-data"],
    queryFn: async () => {
      return axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => response.data);
    },
  });
  useEffect(() => {
    setCountries(data);
  }, [data]);

  if (isError) {
    return <h1>Sorry,data can not be loaded at this time</h1>;
  }

  if (isLoading) {
    return <h1>Data is loading...</h1>;
  }

  const filterCountries = countries?.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>

      <div className="countryDisplay">
        {filterCountries?.map((country) => (
          <div key={country.cca2}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

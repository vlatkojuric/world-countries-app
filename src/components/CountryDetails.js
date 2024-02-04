import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function CountryDetails() {
  let { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["country-data"],
    queryFn: async () => {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);

      return response.data;
    },
  });

  if (isError) {
    return <h1>Sorry,data can not be loaded at this time</h1>;
  }

  if (isLoading) {
    return <h1>Data is loading...</h1>;
  }

  const countries = data;
  console.log(countries);

  const country = countries?.find((details) => details.cca2 === id);

  return (
    <div>
      {country && <h1>{country.name.common}</h1>}

      <button>
        <Link to="/"> Back</Link>
      </button>
    </div>
  );
}

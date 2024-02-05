import { Link, useParams } from "react-router-dom";
import { useCountryData } from "../hooks/useCountryData";

export default function CountryDetails() {
  let { id } = useParams();

  const { data, isLoading, isError } = useCountryData();
  const countries = data;

  if (isError) {
    return <h1>Sorry,data can not be loaded at this time</h1>;
  }

  if (isLoading) {
    return <h1>Data is loading...</h1>;
  }

  const country = countries?.find((details) => details.cca2 === id);

  return (
    <>
      <div>
        {country && (
          <>
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
          </>
        )}
      </div>
      <button>
        <Link to="/"> Back</Link>
      </button>
    </>
  );
}

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
            <h2>{country.name.common}</h2>
            <p>Region: {country.region}</p>
            <p>Pouplation: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <p>Top level domain : {country.tld}</p>
            {country.subregion && <p>Sub Region: {country.subregion}</p>}
            {/* Object.values(country.languages) extracts an array of language names.
            .join(", ") transforms the array into a comma-separated string for display.
 */}
            <p>Languages: {Object.values(country.languages).join(", ")}</p>
            <p>
              Currencies:{" "}
              {Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")}
            </p>
            <h3>Border countries : {country.borders.join(",")}</h3>
          </>
        )}
      </div>
      <button>
        <Link to="/"> Back</Link>
      </button>
    </>
  );
}

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

  const borders = country.borders?.map(
    (border) => countries.find((c) => c.cca3 === border).name
  );

  return (
    <>
      <div className="buttonPosition">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <button>
            <span className="arrowBack">⬅</span> Back
          </button>
        </Link>
      </div>

      <div className="countryDetailsContainer">
        {country && (
          <>
            <img
              className="countryDetailsImage"
              src={country.flags.png}
              alt={country.flags.alt}
              height={200}
              width={300}
            />
            <div className="countryDetailsInfo1">
              <h2>{country.name.common}</h2>
              <p>
                {" "}
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              {country.subregion && (
                <p>
                  <strong>Sub Region:</strong> {country.subregion}
                </p>
              )}
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
              <div className="borderCountries">
                {borders && (
                  <span>
                    <strong>Border Countries:</strong>{" "}
                    <p>{borders?.map((c) => c.common).join(" , ")}</p>
                  </span>
                )}
              </div>
            </div>

            <div className="countryDetailsInfo2">
              <p>
                <strong>Top Level Domain:</strong> {country.tld}
              </p>
              {/* Object.values(country.languages) extracts an array of language names.
            .join(", ") transforms the array into a comma-separated string for display.
 */}

              <p>
                <strong>Currencies:</strong>{" "}
                {Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

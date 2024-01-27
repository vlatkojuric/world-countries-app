export default function Country({
  name,
  flag,
  alt,
  region,
  population,
  capital,
}) {
  return (
    <div>
      <img src={flag} alt={alt} />
      <h3>{name}</h3>
      <p>{region}</p>
      <p>{population}</p>
      <p>{capital}</p>
    </div>
  );
}

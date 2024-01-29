export default function Country({
  name,
  image,
  alt,
  region,
  population,
  capital,
}) {
  return (
    <div>
      <img src={image} alt={alt} height={200} width={300} />
      <h3>{name}</h3>
      <p>{region}</p>
      <p>{population}</p>
      <p>{capital}</p>
    </div>
  );
}

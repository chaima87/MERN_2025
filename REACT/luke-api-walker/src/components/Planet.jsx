import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFound from './NotFound';
import obiwan from '../assets/obiwan.jpg';

function Planet() {
  const { id, params} = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    fetch(`https://www.swapi.tech/api/${params}/${id}`)
      .then(res =>{
        console.log(res)
      })
  }, [id]);

  if (error) return <NotFound />;
  if (!planet) return <p>Loading...</p>;

  return (
    <div>
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Gravity:</strong> {planet.gravity}</p>
    </div>
  );
}
export default Planet;

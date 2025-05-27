import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFound from './NotFound';

function Person() {
  const { id, params } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    
    fetch(`https://swapi.dev/api/${params}/${id}`)
      .then(res =>{
        console.log(res)
      })
  }, [id, params]);

  if (error) return <NotFound />;
  if (!params) return <p>Loading...</p>;

  return (
    <div>
      <h2>{params.name}</h2>
      <p><strong>Height:</strong> {params.height}</p>
      <p><strong>Mass:</strong> {params.mass}</p>
      <p><strong>Hair Color:</strong> {params.hair_color}</p>
      <p><strong>Skin Color:</strong> {params.skin_color}</p>
    </div>
  );
}
export default Person;

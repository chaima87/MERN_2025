
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const capitalize = (name) => {
  return (name.charAt(0).toUpperCase() + name.slice(1));
  };
  useEffect(() => {
  
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then (response => {
        setPokemonList(response.data.results); 
        })
        
        .catch (error => {
        console.log('Failed to fetch Pokémon:', error);
        });
      },[]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Pokemon API</h1>
      <ul style={{ listStyleType: 'disc', textAlign: 'left', display: 'inline-block' }}>
        {pokemonList.map((pokemon, index) => (

          <li key={pokemon.url} style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>
            {capitalize (pokemon.name)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

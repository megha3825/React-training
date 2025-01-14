import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching Pokémon details:", error)
      );
  }, [name]);

  useEffect(() => {
    if (pokemon) {
      document.title = `Pokemon: ${pokemon.name}`;
    }
  }, [pokemon]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetail;

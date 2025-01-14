import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ pokemonList }) {
  return (
    <div className="sidebar">
      <h3>Pokemon List</h3>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

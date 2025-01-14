import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import PokemonDetail from "./PokemonDetail";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  // Fetching Pokemon data from the API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Sidebar pokemonList={pokemonList} />
        <div className="content">
          <Routes>
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

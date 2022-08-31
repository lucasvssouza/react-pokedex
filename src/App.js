import "./App.css";
import React, { useState, useEffect } from "react";
import PokemonPage from "./components/PokemonPage";
import { pokemonList, getPokedex, numberPokemon, searchPokemon } from "./api";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [cPage, setcPage] = useState(1);

  const nextPage = async () => {
    if (cPage >= page) {
      setcPage(page);
    } else {
      setcPage(cPage + 1);
    }
  };

  const previousPage = async () => {
    if (cPage <= 1) {
      setcPage(1);
    } else {
      setcPage(cPage - 1);
    }
  };

  const getNumber = async () => {
    const number = await numberPokemon();
    if (number.count % 51) {
      const nresult = Math.trunc(number.count / 51) + 1;
      setPage(nresult);
    } else {
      const nresult = number.count / 51;
      setPage(nresult);
    }
  };

  getNumber();

  const fetchPokemons = async (page) => {
    try {
      setLoading(true);
      const data = await pokemonList((cPage - 1) * 51);
      const promises = data.results.map(async (pokemon) => {
        return await getPokedex(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      console.log(results);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  const onSearchHandler = async (pokemon) => {
    try {
      setSearch(true);
      const results = await searchPokemon(pokemon.toLowerCase());
      console.log(results);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [cPage]);

  return (
    <div className="main">
      <Navbar />
      <Searchbar onSearchHandler={onSearchHandler} />
      <PokemonPage
        previousPage={previousPage}
        nextPage={nextPage}
        page={page}
        cpage={cPage}
      />
      <PokemonList pokemons={pokemons} loading={loading} search={search} />
      <Footer />
    </div>
  );
}

export default App;

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
  const [details, setDetails] = useState(false)
  const [onDelete, setonDelete] = useState(true);
  const [backPage, setbackPage] = useState(false);
  const [page, setPage] = useState(1);
  const [cPage, setcPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlPage = urlParams.get("page");
  const urlPokemon = urlParams.get("pokemon");

  const updateURL = async (key, type, value, variable) => {
    if (type === "pageSafe") {
      var newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        key +
        value;
      window.history.pushState({ path: newurl }, "", newurl);
      setcPage(key);
    }
    if (type === "pokemonSafe") {
      var newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        key +
        value +
        "&page=" +
        cPage;
      window.history.pushState({ path: newurl }, "", newurl);
    }
  };

  const deleteURL = async () => {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?page=" +
      cPage;
    window.history.pushState({ path: newurl }, "", newurl);
    setbackPage(false);
    setDetails(false);
    setonDelete(true);
  };

  const nextPage = () => {
    if (cPage >= page) {
      setcPage(page);
    } else {
      updateURL("?page=", "pageSafe", cPage + 1, "page");
    }
  };

  const previousPage = async () => {
    if (cPage <= 1) {
      setcPage(1);
    } else {
      updateURL("?page=", "pageSafe", cPage - 1, "page");
    }
  };

  const returnPage = async () => {
    deleteURL();
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
      if (urlPokemon === null) {
        if (urlPage === null) {
          setLoading(true);
          const data = await pokemonList((cPage - 1) * 51);
          const promises = data.results.map(async (pokemon) => {
            return await getPokedex(pokemon.url);
          });
          const results = await Promise.all(promises);
          setPokemons(results);
          setLoading(false);
        } else {
          const currentPage = parseInt(urlPage);
          if (currentPage >= 1 && currentPage <= 23) {
            setcPage(currentPage);
            setLoading(true);
            const data = await pokemonList((currentPage - 1) * 51);
            const promises = data.results.map(async (pokemon) => {
              return await getPokedex(pokemon.url);
            });
            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
          } else {
            setLoading(true);
            const data = await pokemonList((cPage - 1) * 51);
            const promises = data.results.map(async (pokemon) => {
              return await getPokedex(pokemon.url);
            });
            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
          }
        }
      } else {
        onSearchHandler(urlPokemon);
      }
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  const onSearchHandler = async (pokemon) => {
    const fillPokemon = pokemon.trim();
    if (fillPokemon === "") {
    } else {
      try {
        setSearch(true);
        setbackPage(true);
        const results = await searchPokemon(fillPokemon.toLowerCase());
        console.log(results);
        if (results !== undefined) {
          updateURL("?pokemon=", "pokemonSafe", fillPokemon, "pokemon");
          setPokemons([results]);
          setSearch(false);
          setDetails(true);
          console.log(typeof results);
        } else {
          setPokemons(undefined);
          setSearch(false);
        }
      } catch (err) {
        console.log("Error: " + err);
      }
    }
  };

  const pokemonDetails = async (pokemon) => {
    const fillPokemon = pokemon.trim();
    if (fillPokemon === "") {
    } else {
      try {
        setSearch(true);
        setbackPage(true);
        const results = await searchPokemon(fillPokemon.toLowerCase());
        if (results !== undefined) {
          updateURL("?pokemon=", "pokemonSafe", fillPokemon, "pokemon");
          setPokemons([results]);
          setDetails(true);
          setSearch(false);
        } else {
          setPokemons(undefined);
          setSearch(false);
        }
      } catch (err) {
        console.log("Error: " + err);
      }
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [cPage]);

  useEffect(() => {
    fetchPokemons();
    setonDelete(false);
  }, [onDelete]);

  return (
    <div>
      <div className="app-container">
        <Navbar />
        <main>
          <div className="search-page">
            <Searchbar onSearchHandler={onSearchHandler} />
            <PokemonPage
              previousPage={previousPage}
              nextPage={nextPage}
              page={page}
              cpage={cPage}
              backPage={backPage}
              returnPage={returnPage}
              loading={loading}
              search={search}
            />
          </div>
          <PokemonList pokemons={pokemons} details={details} loading={loading} search={search} pokemonDetails={pokemonDetails} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

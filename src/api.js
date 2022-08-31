import React from "react";

export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log("Pokémon não encontrado!");
  }
};

export const numberPokemon = async () => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log("Não foi possivel acessar a API!");
  }
};

export const pokemonList = async (page) => {
  try {
    if(page === undefined){
      page = 0;
    }
    let url = `https://pokeapi.co/api/v2/pokemon?limit=51&offset=${page}`;
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log("Erro ao listar os Pokemons!");
  }
};

export const getPokedex = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log("Pokémon não encontrado!");
  }
};

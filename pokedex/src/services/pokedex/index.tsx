import {useState, useCallback} from 'react'
import {PokemonAPIDetail, PokemonAPIResponse} from '../../types/pokemon.api.type'
import {Pokemon} from '../../types/pokemon.type'
import { get } from 'http';

const BASE_URL = 'https://pokeapi.co/api/v2';
const IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const getAllPokemons = async (options: any): Promise<Pokemon[]> => {
    const response = await fetch(`${BASE_URL}/pokemon`, options);
  
    const pokemonReponse: PokemonAPIResponse = await response.json();
  
    const results = pokemonReponse.results;
  
    const payload = await Promise.all(
      results.map(async (pokemon) => {
        const { id, types } = await getPokemonType(pokemon.url);
        const imageUrl = getPokemonImageUrl(id);
        return { id, name: pokemon.name, types, imageUrl };
      }
  return payload;
  };

const getPokemonType = async (url:string) => {
    const response = await fetch(url);
    const pokemonDetailedResponse: PokemonAPIDetail = await response.json();
    const {id, types} = pokemonDetailedResponse
    return {id,types}
}
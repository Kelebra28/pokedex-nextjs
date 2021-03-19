import * as types from '../types';
import axios from "axios";


export const getPokemonAction = () => async (dispatch) => {

  if (localStorage.getItem('offset=0')) {
    dispatch({
      type: types.GET_POKE_SUCCESS,
      payload: JSON.parse(localStorage.getItem('offset=0'))
    });
  } else {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1')
      dispatch({
        type: types.GET_POKE_SUCCESS,
        payload: res.data
      });
      localStorage.setItem('offset=0', JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export const nextPokemonAction = () => async (dispatch, getState) => {

  const { next } = getState().pokemones;

  if (localStorage.getItem(next)) {
    dispatch({
      type: types.GET_POKE_NEXT_SUCCESS,
      payload: JSON.parse(localStorage.getItem(next))
    });
  } else {

    try {
      const res = await axios.get(next);
      dispatch({
        type: types.GET_POKE_NEXT_SUCCESS,
        payload: res.data
      });
      localStorage.setItem(next, JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    };
  };
};

export const previousPokemonAction = () => async (dispatch, getState) => {
  const { previous } = getState().pokemones;
  if (localStorage.getItem(previous)) {
    dispatch({
      type: types.GET_POKE_NEXT_SUCCESS,
      payload: JSON.parse(localStorage.getItem(previous))
    });
  } else {
    try {
      const res = await axios.get(previous);
      dispatch({
        type: types.GET_POKE_NEXT_SUCCESS,
        payload: res.data
      })
      localStorage.setItem(previous, JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  }
}
export const getDetailsPokemon = (urlPokemon) => async (dispatch) => {
  if (urlPokemon === undefined) {
    urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1/';
  }
  if (localStorage.getItem(urlPokemon)) {
    dispatch({
      type: types.GET_DETAILS_POKEMON,
      payload: JSON.parse(localStorage.getItem(urlPokemon))
    })
    return;
  };
  try {
    const res = await axios.get(urlPokemon);
    dispatch({
      type: types.GET_DETAILS_POKEMON,
      payload: {
        name: res.data.name,
        photo: res.data.sprites.front_default,
        height: res.data.height,
        weight: res.data.weight,
        id: res.data.id
      }
    });
    localStorage.setItem(urlPokemon, JSON.stringify({
      name: res.data.name,
      photo: res.data.sprites.front_default,
      height: res.data.height,
      weight: res.data.weight,
      id: res.data.id
    }));
  } catch (error) {
    console.log(error);
  };

};
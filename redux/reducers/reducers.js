import * as types from '../types';

const dataInicial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  offset: 0
};

export default  function pokesReducer(state = dataInicial, action){
  switch(action.type){
    case types.GET_POKE_SUCCESS:
            return {...state, ...action.payload}
        case types.GET_POKE_NEXT_SUCCESS:
            return {...state, ...action.payload}
        case types.GET_POKE_PREVIUS_SUCCESS:
          return {...state, ...action.payload}
        case types.GET_DETAILS_POKEMON: 
            return {...state, onePokemon: action.payload}
        default: 
            return state;
    };
};


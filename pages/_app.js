import { Provider } from 'react-redux';
import  generateStore from '../redux/store';
import React from 'react';
import '../style/card_pokemons.css';

export default function App({ Component }) {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

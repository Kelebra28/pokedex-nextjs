import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pokedex from './StyleCommponets/Pokedex';
import PokeInfo from './StyleCommponets/PokeInf';
import Button from './StyleCommponets/Buttons';
import ContainerButtons from './StyleCommponets/ContainerButtons';
import {
    getPokemonAction,
    nextPokemonAction,
    previousPokemonAction,
    getDetailsPokemon
} from '../redux/actions/actions';



const Pokemons = () => {
    const dispatch = useDispatch();
    const pokemones = useSelector(store => store.pokemones.results);
    const pokemon = useSelector(store => store.pokemones.onePokemon);
    const onePokeon = pokemones.map(item => item.url);
    const nextPokemon = () => {
        dispatch(nextPokemonAction());
        dispatch(getDetailsPokemon(onePokeon));
    };
    const previusPokemon = () => {
        dispatch(previousPokemonAction());
        dispatch(getDetailsPokemon(onePokeon));
    };

    useEffect(() => {
        const fistPokemon = () => {
            dispatch(getPokemonAction());
            dispatch(getDetailsPokemon(onePokeon));
        };
        fistPokemon();
    }, [dispatch]);
    return (
        <Pokedex>
            <div className="buttonsTop">
                <div className="bigButton">
                </div>
                <div className="greenButton"></div>
                <div className="yellowButton"></div>
                <div className="redButton"></div>
            </div>
            <div className="pokeContainer">
                <PokeInfo>
                    {pokemones.length === 0 ? 'No hay pokemones' : null}
                    <div className="pokemon">
                        <div>
                            <h2> {pokemon === undefined ? 'Exploremos Pokemones' : pokemon.name}</h2>
                            <div className="imgPoke">
                                <img src={pokemon !== undefined ? pokemon.photo : null} alt="" />

                                <div>
                                    <p>{pokemon !== undefined ? `Altura: ${pokemon.weight}cm` : null} </p>
                                    <p>{pokemon !== undefined ? `Peso: ${pokemon.height} kg` : null}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </PokeInfo>
                <div className="changePokemon">
                <ContainerButtons onClick={() => nextPokemon()}>
                    <Button className="up"></Button>
                </ContainerButtons>
                <ContainerButtons onClick={() => previusPokemon()}>
                    <Button className="down"></Button>
                </ContainerButtons>
                </div>
               
            </div>
            <div>
                <img className="pikachu" src="https://media.giphy.com/media/Lm2hujbNpM7fi/giphy.gif" alt="Pikachu" />
            </div>

        </Pokedex>
    );
};

export default Pokemons;
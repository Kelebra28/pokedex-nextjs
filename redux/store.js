
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokesReducer from './reducers/reducers'

const rootReducer = combineReducers({
    pokemones: pokesReducer,

})

export default function generateStore() {
    const store = createStore( rootReducer, applyMiddleware(thunk) )
    return store
}
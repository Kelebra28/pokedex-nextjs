import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import  {  getPokemonAction } from '../redux/actions/actions';
import expect from 'expect' ;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Async Get Pokemon', () => { 
    it('Get Pokemon', () => {
        const store = mockStore();
         
          const onePokekom = store.dispatch(getPokemonAction('https://pokeapi.co/api/v2/pokemon?offset=1&limit=1')).then(()=> {
            return expect(onePokekom).resolves.toBe({name: 'ivysaur' , url: 'https://pokeapi.co/api/v2/pokemon/2/'});
          });
        });
});
 



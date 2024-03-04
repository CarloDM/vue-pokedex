import {store} from './store';
import axios from 'axios';

export{
  pokemonByName,
};

function pokemonByName(pokeName){

  axios.get(store.apiPoke.baseUrl + pokeName)
  .then(response => {

    store.userState.pokedex = response.data;

  })
  .catch(error =>{
    console.log(error);
  });

}


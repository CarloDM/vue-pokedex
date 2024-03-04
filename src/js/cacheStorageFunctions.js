import { store } from "./store";
import pokemonNameList from './pokemonNameList';

export{
  saveCache, loadCache,
};

function saveCache(){

  store.userState.firstPlay = false;
  const userState = JSON.stringify(store.userState);
  localStorage.setItem('userState', userState);

}

function loadCache(){
  const userState = JSON.parse(localStorage.getItem('userState'));
  if(userState !== null){

    store.userState = userState;

  }else{

    console.log('no cache');
    store.userState.freePokemonName = pokemonNameList.pokemonNameList;
    saveCache();

  }
}
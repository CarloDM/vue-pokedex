import { reactive } from "vue";
import apiPoke from './apiPoke';
import nameList from './pokemonNameList'

export const store = reactive({

  apiPoke: apiPoke,

  userState : {
    firstPlay : true,
    money: 0,
    CH4:0,
    deforestationLevel : 1,
    freePokemonName:  null,
    UserPokemonAlive:  [],
    UserPokemonDeaths: [],
    pokedex: {name:'unknow'}

  },
  intervalOn : false,
  pokemonAvaible : [],
  deforestationPrice : [
    250, 
    500, 
    1000, 
    2000, 
    4000,
    8000, 
    16000,
    32000,
    46000,
    92000,
    184000,
  ]




})
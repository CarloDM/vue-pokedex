<script>
import {store} from '../js/store.js';
import {pokemonByName} from '../js/calls';
import Forest from '../components/forest.vue';
import PokemonList from '../components/partials/pokemonList.vue';
import PokemonInfoCard from '../components/partials/pokemonInfoCard.vue';
export default {
  name: 'Poaching',
  data(){
    return{
      store,
    } 
  },
  components:{Forest, PokemonList, PokemonInfoCard},
  watch:{},
  computed:{},
  methods:{

    toggleAim(){
      
      this.aiming = !this.aiming;

    },

    pokedexUpdate(pokemonName){

      pokemonByName(pokemonName);

    }
  },
  mouted(){

  }
}
</script>
<template>
  <div class="container">

    <Forest 

    />

    <div class="flex_container">

      <PokemonInfoCard
        :pokemon="store.userState.pokedex"
      />
  
      <PokemonList
        :pokemons="store.userState.UserPokemonAlive"
        @requestPokemonInfo="pokedexUpdate"
      />

    </div>


  </div>
</template>

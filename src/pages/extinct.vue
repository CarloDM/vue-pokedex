<script>
import {store} from '../js/store.js';
import {pokemonByName} from '../js/calls';
import MassGrave from '../components/massGrave.vue';
import PokemonList from '../components/partials/pokemonList.vue';
import PokemonInfoCard from '../components/partials/pokemonInfoCard.vue';
export default {
  name: 'Extinct',
  data(){
    return{store} 
  },
  components:{MassGrave, PokemonList, PokemonInfoCard},
  watch:{},
  computed:{},
  methods:{
    pokedexUpdate(pokemonName){
      console.log('ricevuto emit', pokemonName)
      pokemonByName(pokemonName);
    }
  },
  mouted(){}
}
</script>
<template>
  <div class="container">

    <MassGrave
      :state="store.userState"
    />


    <div class="flex_container">

      <PokemonInfoCard
        :pokemon="store.userState.pokedex"
      />

      <PokemonList
        :pokemons="store.userState.UserPokemonDeaths"
        @requestPokemonInfo="pokedexUpdate"
      />

</div>





  </div>
</template>

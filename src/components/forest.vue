<script>
import{store} from '../js/store';
import axios from 'axios';
import {probabilisticBoolean,randomBetween } from '../js/mathFunction.js';
import FreePokemon from './partials/freePokemon.vue';
export default {
  name:'Forest',

  data(){
    return{
      store,
      aiming:false, 
      forestIsEmpty: false,
      message:'Hunting...'
    }
  },

  components:{FreePokemon},

  watch:{
    'store.pokemonAvaible' : {
      handler(n,o){
        this.forestConsoleInfo();
      },
      deep:true,
    },

    'forestIsEmpty' : {
      handler(n,o){
        if(n){
          this.sortOutPokemons();
        }
      },
    }
  },
  
  methods: {

    forestConsoleInfo(){

      let free = 0 , deaths = 0, captured = 0,  escaped = 0;

      store.pokemonAvaible.forEach(pokemon =>{
        if(!pokemon.alive){
          deaths ++;
        }else if(pokemon.captured){
          captured++;
        }else if (pokemon.escaped) {
          escaped ++
        }
      });

      free = store.pokemonAvaible.length - deaths - captured - escaped;

      this.message = ' free ' + free + ' deaths ' + deaths  ;


      if(free === 0){
        console.log('empty');
        this.forestIsEmpty = true;
      }else{
        this.forestIsEmpty = false;
      }
    },

    sortOutPokemons(){
      store.pokemonAvaible.forEach(pokemon =>{
        if(!pokemon.alive){
          const 
          deadPokemon = {};
          deadPokemon.name = pokemon.name;
          deadPokemon.img  = pokemon.frontImg; 
          store.userState.UserPokemonDeaths.unshift(deadPokemon);
          this.removeFromList(pokemon);
        }else if(pokemon.captured){
          const capturedPokemon = {};
          capturedPokemon.name = pokemon.name;
          capturedPokemon.img  = pokemon.frontImg; 
          store.userState.UserPokemonAlive.unshift(capturedPokemon);
          this.removeFromList(pokemon);
        }
      });

      store.pokemonAvaible = [];
      this.forestIsEmpty = false;
      this.message = 'Hunting...'
    },

    toggleAim() {
      this.aiming = !this.aiming;
    },

    tryToCatch(){

      this.aiming = false;

      store.pokemonAvaible.forEach(pokemon => {

          if(probabilisticBoolean(pokemon.probability)){

              pokemon.captured = true;
              console.log('catturato', pokemon.name);

          }else{

            pokemon.escaped = true;

          }

      });
    },

    removeFromList(pokemon){

      const pockemonIndex = store.userState.freePokemonName.indexOf(pokemon.name);
      store.userState.freePokemonName.splice(pockemonIndex, 1);

    },
    
  },

  mounted(){},
}
</script>
<template>
  <section 
    class="forest"
    :class="{'aiming' : this.aiming}"
  >

    <FreePokemon v-for="(pokemon, index) in store.pokemonAvaible"  
      :key="index"
      :pokemon="pokemon"
      :aiming="this.aiming"
      :arrId= "index"
      />

    <span class="hunting">{{this.message}}</span>

    <button 
      @click="toggleAim()" 
      class="btn fire"
      :class="{'selected' : this.aiming}"
    >
      Fucile
    </button>

    <button
      @click="tryToCatch"
      class="btn capture"
    >
      Cattura
    </button>




  </section>
</template>
<style lang="scss" scoped>

@use '../scss//var' as  *;

.forest{
  position: relative;
  width: 100%;
  height: 50%;
  background-image: url(../assets/backgrounds/forest-post2.jpg);
  background-position: center;
  background-size: cover;

  & .hunting{
    position: absolute;
    color: green;
    top: 30px;
    right: 10px;
    user-select: none;
  }

  & .btn {
    position: absolute;
    padding:10px;
    width: 100px;
    font-size: 1rem;
    background-color: $bg_black_80;
    color: $white_220;
    border: none;
    box-shadow: inset 0px 0px 2px 1px $bg_black_40 ;
    &:hover{
      color: red;
    }
  }
  & .fire{
    bottom: 0;
  }
  & .capture{
    bottom: 0;
    left: 100px;
  }

}
.aiming{
    cursor: crosshair;
  }

  .selected{
    filter: brightness(0.5);
  }

</style>
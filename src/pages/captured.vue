<script>
import {store} from '../js/store';
import {probabilisticBoolean} from '../js/mathFunction';
import Enclosure from '../components/enclosure.vue';
import PokemonList from '../components/partials/pokemonList.vue';
import PokemonInfoCard from '../components/partials/pokemonInfoCard.vue';
export default {
  name: 'Captured',
  data(){
    return{store} 
  },
  components:{Enclosure, PokemonList, PokemonInfoCard},
  watch:{},
  computed:{},
  methods:{
    figth(){
      const capturedLength = store.userState.UserPokemonAlive.length;
      console.log(capturedLength);
      const profit = capturedLength * 2;
      const remaning = capturedLength % 2;
      console.log(remaning, 'profit', profit );
      
      for (let i = 0; i < store.userState.UserPokemonAlive.length - remaning; i++) {
        if((i !== 0) && (i % 2) === 0){
          console.log(i)
          if(probabilisticBoolean(50)){
            store.userState.UserPokemonAlive[i].dead = true;
            store.userState.UserPokemonAlive[i - 1].dead = false;
          
          }else{
            store.userState.UserPokemonAlive[i].dead = false;
            store.userState.UserPokemonAlive[i - 1].dead = true;
          }
      }

      for (let i = 0; i < store.userState.UserPokemonAlive.length - remaning; i++){
        if(store.userState.UserPokemonAlive[i].dead){
          store.userState.UserPokemonDeaths.unshift(store.userState.UserPokemonAlive[i]);
          store.userState.UserPokemonAlive.splice(i, 1);
          store.userState.money += profit;
          console.log('+', profit)
        }
      };

    }
    },
  mouted(){}
  }
}
</script>
<template>
  <div class="container">

    <Enclosure
      :captured="store.userState.UserPokemonAlive"
    />

    <section class="battleMenager">

      <h4 style="margin-top: 10px;">Illegal Battle:</h4>

      <button
        @click="this.figth()"
      >
        Fight:  {{ (store.userState.UserPokemonAlive.length * 2) * store.userState.UserPokemonAlive.length / 2  }} $
      </button>


    </section>

  </div>
</template>

<style lang="scss" scoped>
.battleMenager{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 25%;

  & button{
    width: 30%;
    padding: 20px;
    font-size: 1rem;
    margin-top: 10px;
    border: none;
    background-color: rgba(255, 255, 255, 0.534);
    border-radius: 10px;

    &:hover{
      background-color: rgb(255, 255, 255);
      box-shadow: 0px 0px 25px 1px red;
      
    }
  }
}

</style>

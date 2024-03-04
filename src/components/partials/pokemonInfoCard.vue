<script>
import {store} from '../../js/store'
export default {
  name:'PokemonInfoCard',
  data(){
    return{
      store,
      loading: true,
    }
  },
  watch: {
    'store.userState.pokedex' : {
      handler(n, o){

        this.loading = false;
      }
    },

  },
  props:{
    pokemon: Object,
  },
  methods: {},
  mounted(){},
}
</script>
<template>
  <div class="WidthContainer7">
    <div 
    v-if="!this.loading"
    class="pokemonInfoCard "
    >
    
      <h2 >Pokedex</h2>

        <h3>{{pokemon.name}}</h3>

        <img class="debug3" :src="this.pokemon.sprites.front_default">

        <ul class="stats">

          <li class=""
            v-for="(stat, index ) in this.pokemon.stats" :key="index"
          >

            <span class="stat_name ">
              {{ stat.stat.name }}  
            </span>

            <span 
              class="stat_value "
              :style="{width:  ((stat.base_stat / 255 ) * 100) + '%' }"
            >
              {{ stat.base_stat }}
            </span>
          </li>

        </ul>

    </div>
  </div>
</template>
<style lang="scss" scoped>
.WidthContainer7{
  box-shadow: inset 0px 0px 25px 0px rgb(8, 5, 5);
}
.pokemonInfoCard{
  width: 100%;
  height: 100%;
  text-align: center;
  user-select: none;
  overflow: auto;


  & h2{
    margin: 5px;
    box-shadow: inset 0px 0px 25px 1px rgba(255, 255, 255, 0.151);
    padding:5px;
    border-radius: 20px;
  }

  & h3{
    color: red;
    text-shadow: 1px 1px 5px rgb(0, 0, 0);
    text-transform: capitalize;
  }
  & img{
    width: 150px;
    background:
      radial-gradient(circle,
        rgb(180, 180, 180) -25%,
        rgba(94, 94, 94, 0.096) 30%,
        rgba(0, 0, 0, 0) 60%),;
  }
  & .stats{
    text-align: start;
    height: 40%;

    & li{
      width: 100%;
      margin-bottom: 5px;
      // border: 1px solid black;
      font-size: 0.9rem;
    }

    & .stat_name{
      display: inline-block;
      width: 32%;
      max-width: 150px;
      min-width: 103px;
    }

    & .stat_value{
      display: inline-block;
      font-size: 0.85rem;
      border-radius: 0px 5px 5px 0px ;
      box-shadow: inset 0px 0px 2px 1px rgb(0, 0, 0);
      padding: 2px 10px;
      background-color: rgb(177, 216, 167);
      color: black;
      font-weight: 400;
    }
  }
}

</style>
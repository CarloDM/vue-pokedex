<script>
export default {
  name:'PokemonList',
  data(){
    return{

    }
  },
  props:{
    pokemons: Array,
  },
  computed:{

  },
  methods: { 

    emitName(pokemonName){
      console.log('emit', pokemonName);
      this.$emit('requestPokemonInfo', pokemonName);
    }

  },
  mounted(){
    // console.log(this.pokemons)
  },
}
</script>
<template>
  <section class="WidthContainer3">

    <h2>List</h2>

    <ul class="pokemonList ">
      <li 
        v-for="(pokemon, index) in this.pokemons" :key="index"
        @click="emitName(pokemon.name)"
      >
        {{ pokemon.name }}
      </li>
    </ul>


  </section>
</template>
<style lang="scss" scoped>
.WidthContainer3{
  box-shadow: inset 0px 0px 150px 0px rgb(0, 0, 0);
}
.pokemonList{

    width: 100%;
    height: 100%;
    overflow: auto;
    text-align: end;
    user-select: none;
    padding-right: 25px;


  & li{
    cursor: pointer;
    user-select: none;
    text-transform: capitalize;
    transition: all 0.1s ease-out;
    &:hover{
      color: white;
      text-shadow: 1px 1px 2px white;
      letter-spacing: 3px;
    }
  }
}
</style>
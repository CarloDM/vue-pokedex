<script>
import capturedPokemon from './partials/capturedPokemon.vue'
export default {
  name:'Enclosure',
  data(){
    return{

    }
  },
  props:{
    captured:Array,
  },
  components:{capturedPokemon},
  methods: {  },
  mounted(){},
}
</script>
<template>
  <section class="enclosure ">

    <h1>{{ this.captured.length }} Pokemon Captured</h1>

    <capturedPokemon v-for="(pokemon, index) in this.captured" :key="index"
      :icon="pokemon.img"
    />

  </section>
</template>
<style lang="scss" scoped>

.enclosure{
  position: relative;
  width: 100%;
  height: 75%;
  padding:25px;
  box-shadow: inset 0px 0px 200px 1px black;
  border-radius: 50px;
}

</style>
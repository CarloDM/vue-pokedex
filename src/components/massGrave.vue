<script>
export default {
  name:'MassGrave',
  data(){
    return{

    }
  },
  props:{
    state:Object,
  },
  methods: {  },
  mounted(){},
}
</script>
<template>
  <section class="mass_grave">

    <div class="mass_grave_info ">
      <p>Pokemon Extict : {{ state.UserPokemonDeaths.length }} / {{state.freePokemonName.length}} Avaible</p>
      <p>CH4  = {{ state.UserPokemonDeaths.length }} / sec</p>
    </div>

  </section>
</template>
<style lang="scss" scoped>
.mass_grave{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background-image: url(../assets/backgrounds/fossaComune_post.jpg);
  background-position: center;
  background-size: cover;

  & .mass_grave_info{
    font-size: 1.8rem;
    color: white;
    border-radius: 20px;
    padding: 35px;
    text-align: center;
    box-shadow: inset 0px 0px 150px 1px black;;

    & p{
      margin-bottom: 8px;
    }
  }
}
</style>
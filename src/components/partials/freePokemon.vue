<script>
import {randomBetween} from '../../js/mathFunction'
export default {
  name:'FreePokemon',
  data(){
    return{
      initialHp : null,
      PY : 0,
      PX : 0,
    }
  },

  props:{
    pokemon: Object,
    arrId: Number,
    aiming: Boolean,
  },
  methods: { 
    getDamage(){
      if(this.aiming){
        console.log('colpito');

        this.pokemon.hp -= randomBetween(30,120);

        console.log('after shot hp',this.pokemon.hp);

        this.pokemon.probability = Math.floor(((this.pokemon.hp / this.initialHp ) * 100) - 99) * - 1;

        if(this.pokemon.hp < 1){
          console.log('pokemon is die');
          // this.emitDie();
          this.pokemon.alive = false;
        }
      }
    },

    emitDie(){
      this.$emit('die', {message: this.pokemon.name} , this.arrId);
    },

    randomPosition(){
      this.PY = randomBetween(30, 70);
      this.PX = randomBetween(15, 75);
    }

  },
  mounted(){
    this.initialHp = this.pokemon.hp;
    setInterval(() => {
      this.randomPosition();
    }, 2000);
    this.randomPosition();

  },
}
</script>
<template>
  <div 
    v-if="this.pokemon.alive && !this.pokemon.captured && !this.pokemon.escaped  "
    class="freePokemon_container "
    @click="getDamage()"
    :style="{top: this.PY + '%', left : this.PX + '%' }"
  >

    <div class="probability ">{{ this.pokemon.probability +'%' }}</div>
    <div 
    class="lifebar"
    :style="{width:  ((this.pokemon.hp / this.initialHp ) * 100) + '%' }"
    
    ></div>

    <img 
      class=""
      :src="this.pokemon.frontImg" 
      alt=""
    >

    <audio autoplay :src="this.pokemon.cries"></audio>

  </div>

  <audio v-else autoplay :src="this.pokemon.cries"></audio>

</template>
<style lang="scss" scoped>

.freePokemon_container{
  position: absolute;
  filter: contrast(2);
  width: 80px;
  height: 80px;
  top: 50%;
  right: 50%;
  user-select: none;
  transition: all 2s linear;


  & .probability{
    text-align: center;
    position: absolute;
    top: -10px;
    width: 100%; 
    height: 20px; 
    color: white;
  }
  & .lifebar{
    position: absolute;
    bottom: -5px;
    background-color: green;
    // width: 100%; 
    height: 5px; 
  }

  & img{
    width: 100%;
    height: 100%;
    transform: scale(1.2);
  }

}

</style>
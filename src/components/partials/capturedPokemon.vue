<script>
import {randomBetween} from '../../js/mathFunction';
export default {
  name:'CapturedPokemon',
  data(){
    return{
      PY : 0,
      PX : 0,
    }
  },
  props:{
    icon: String,
  },
  methods: {
    randomPosition(){
      this.PY = randomBetween(10, 90);
      this.PX = randomBetween(10, 90);
    }
  },
  mounted(){
    setInterval(() => {
      this.randomPosition();
    }, 10000);
    this.randomPosition();
  },
}
</script>
<template>
  <div 
    class="captured_pokemon "
    :style="{top: this.PY + '%', left : this.PX + '%' }"
  >
    <img :src="this.icon" alt="">

  </div>
</template>
<style lang="scss" scoped>

.captured_pokemon{
  position: absolute;
  width: 20px;
  height: 20px;
  transition: all 10s ease-in-out;
  & img{
    width: 100%;
    height: 100%;
    transform: scale(2);
  }
}
</style>
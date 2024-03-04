<script>
import {store} from '../js/store.js';
export default {
  name: 'Extinct',
  data(){
    return{store} 
  },
  props: {
    userState: Object,
  },
  components:{},
  watch:{},
  computed:{},
  methods:{
    sellGas(){
      const gas = store.userState.CH4;
      store.userState.money += Math.floor(gas * 0.1);
      store.userState.CH4 = 0;
    },

    upgradeDeforestation(){
      if(store.deforestationPrice[store.userState.deforestationLevel - 1 ] < store.userState.money){
        store.userState.money -= store.deforestationPrice[store.userState.deforestationLevel - 1]
        store.userState.deforestationLevel ++;
      }
    },
    
  },
  mouted(){}
}
</script>
<template>
  <div class="finance container ">
    
    <div class="options ">

      <button
        @click="sellGas()"
      >
        Sell {{  store.userState.CH4 }} CH4 x {{  0.1 }} $ = {{ Math.floor(store.userState.CH4 * 0.1) }} $
      </button>

      <button
        @click="upgradeDeforestation()"
      >
        Finance Deforestation Lv. 
        {{ store.userState.deforestationLevel }} 
        Price 
        {{ store.deforestationPrice[store.userState.deforestationLevel - 1] }} 
        $
      </button>

      <ul class="info_container ">

        <li>Money:              {{ store.userState.money }}</li>
        <li>CH4:                {{ store.userState.CH4 }}</li>
        <li>Deforestation Rate: {{ (store.userState.deforestationLevel - 1) * 10 }} %</li>
        <li>Extinction Rate:    {{ Math.round(((store.userState.UserPokemonAlive.length + store.userState.UserPokemonDeaths.length) / 1301) * 100)}} %</li>

      </ul>

    </div>

  </div>
</template>
<style lang="scss" scoped>
.finance{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/backgrounds/finance.jpg);
  background-position: bottom;
  background-size: cover;
  filter: hue-rotate(0deg) saturate(0.8);
  animation: colorRound 8s   infinite;
  animation-direction: alternate;

  & .options{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    box-shadow: inset 0px 0px 20px 1px white;
    background-color: rgba(0, 0, 0, 0.39);
    border-radius: 20px;

    & button{
      padding: 20px;
      font-size: 1rem;
      font-weight: bold;
    }

    & .info_container{
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 40px;
      text-align: end;
      color: white;

      & li{
        margin-bottom: 5px;
      }
    }
  }
}
@keyframes colorRound {

  0%{filter: hue-rotate(0deg) saturate(0.8) brightness(1.2) contrast(0.8);}
  100%{filter: hue-rotate(270deg) saturate(0.8)  brightness(0.8) contrast(1.2);}

}
</style>

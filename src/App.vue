<script >
import axios from 'axios';
import {store} from './js/store';
import {saveCache, loadCache} from './js/cacheStorageFunctions';
import {randomBetween} from './js/mathFunction'
import Header from './components/header.vue';
import Footer from './components/footer.vue';
export default {
  name: 'App',
  data(){
    return{store,} 
  },
  components:{Header,Footer},

  beforeMount(){
    loadCache();
  },

  watch:{
    'store.userState' : {
      handler(n,o){
        saveCache();
      },
      deep:true,
    },
  },
  computed:{},

  methods:{

  updateCH4(){
      setInterval(() => {
        store.userState.CH4 += store.userState.UserPokemonDeaths.length * 10;
      }, 10000);
  },

  updateForest(){
      setInterval(() => {
        let forestIsEmpty = false;
        if(store.pokemonAvaible.length < 1){
          forestIsEmpty = true;
        }
        // console.log(forestIsEmpty, 'interval');
        if(forestIsEmpty){
    
        for (let i = 0; i < store.userState.deforestationLevel; i++) {

          this.getFreePokemon();

        }
          forestIsEmpty = false;
        }

      }, 10000)
  },

  getFreePokemon(){

    const freePokemonLenght = store.userState.freePokemonName.length;
      
    const pokeName = store.userState.freePokemonName[randomBetween(0, freePokemonLenght - 1)];
      
    axios.get(store.apiPoke.baseUrl + pokeName)
    .then(response =>{
    
        const frontImg = response.data.sprites.front_default;
        const backImg = response.data.sprites.back_default;
        const cries = response.data.cries.latest;
    
        const newPokemon = {
        name:pokeName,
        hp:randomBetween(75, 250),
        probability: 1,
        frontImg : frontImg,
        backImg : backImg,
        cries: cries,
        alive:true,
        captured:false,
        escaped:false,
        }
      
        store.pokemonAvaible.push(newPokemon);
      
    })
    
    .catch(error =>{
      console.log(error);
      this.getFreePokemon();
    });

},

},
  mounted(){
    this.updateCH4();
    this.updateForest();
  },

}
</script>
<template>
  <div class="main_wrapper">
    <Header/>

    <main>

      <router-view v-slot="{Component}">
          <component :is="Component"></component>
      </router-view>

    </main>

    <!-- <Footer/> -->

  </div>
</template>
<style lang="scss">
  @import './scss/main.scss';
</style>
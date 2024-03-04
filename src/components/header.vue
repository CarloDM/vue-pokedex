<script>
export default {
  name:'Header',
  data(){
    return{

    }
  },
  methods: {  },
  mounted(){},
}
</script>
<template>
  <header class="">


    <ul class="header_top ">
      <li><router-link to="/"         >Forest   </router-link></li>
      <li><router-link to="/captured" >Captured </router-link></li>
      <li><router-link to="/extinct"  >Extinct  </router-link></li>
      <li><router-link to="/finance"  >Finance  </router-link></li>

      <li><span>Import</span></li>
      <li><span>Export</span></li>

    </ul>

    <div class="header_bottom ">
      <img class="logo" src="../assets/HEADERlOGO.png" alt="">
    </div>


  </header>
</template>
<style lang="scss" scoped>

.header_top{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70%;

  & li{
  padding: 10px;
  margin-right: 5px;

  & :hover{
    color: red;
  }
  }

}
.header_bottom{
  position : relative;
  text-align: center;
  width: 100%;
  height: 30%;
  & .logo{
    position: absolute;
    width: 120px;
    top: -20px;
    left: 50%;
    transform: translate(-50%);
    filter: contrast(1.5) brightness(0.8) hue-rotate(0deg);
    cursor:help;
    z-index: -1;
  }
}

</style>
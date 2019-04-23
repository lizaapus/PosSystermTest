<template>
  <div id="app">
    <leftNav></leftNav>
    <div class='pos'>
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/navLeft'
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.pos{
  height: 100%;
  width: 95%;
  float: left;
  font-size: 24px;
}
</style>

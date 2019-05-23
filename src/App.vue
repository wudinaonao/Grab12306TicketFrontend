<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer, Home, Header},
  date(){
    return{

    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .footer{
    position: absolute;
    width: 100%;
    top: calc(100vh - 51px);
  }
</style>

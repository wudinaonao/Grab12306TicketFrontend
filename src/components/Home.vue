<template>
  <div>

    <div class="row grid">

      <div class="col-6 col-lg-8">
        <div class="home-text bold-font">
          <h1 class="animated fadeInLeft bounce delay-1s">Hi, guys! This is a grab ticket system for 12306.</h1>
        </div>
      </div>

      <div class="col-6 col-lg-4">
        <LoginTest class="login-test"></LoginTest>
        <!--<div class="alert alert-info login-prompt" role="alert">-->
          <!--<h4 class="alert-heading">Description</h4>-->
          <!--<p>Log in with the 12306 username and password and test if the username is valid.</p>-->
          <!--<hr>-->
          <!--<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>-->
        <!--</div>-->
      </div>
    </div>


    <!--<BackendLayout></BackendLayout>-->
  </div>
</template>

<script>
    import LoginTest from "@/components/web/LoginTest";
    import {apiUrl} from "@/javascript/apiUrl";
    export default {
      name: "Home",
      components: {LoginTest},
      data(){
        return{
          apiUrl: {}
        }
      },
      method:{
      },
      mounted(){
        this.apiUrl = apiUrl;
      },
      created() {
      },

    }
</script>

<style scoped>

  @font-face {
    font-family: "Merriweather";
    src: url("../../static/font/Merriweather-Light.ttf");
  }


  .grid{
    padding: 20px;
    /*margin: 0 -20px 0 20px;*/
    width: 100%;
    /*border: 1px red solid;*/
  }

  .login-prompt{
    width: 350px;
  }

  .login-test{
    /*position: absolute;*/
    /*top: 100px;*/
    /*right: 10%;*/
  }
  .home-text{
    /*color: black;*/
    height: 80vh;
    position: relative;
    top: 42%;
    left: 5%;
    /*color: #373C38;*/
    color: aliceblue;
    /*color: #554236;*/
  }

  .bold-font{
    font-family: "Merriweather";
  }
</style>

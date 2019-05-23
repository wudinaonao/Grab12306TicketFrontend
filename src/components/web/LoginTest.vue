<template>
  <div class="root-div shadow-lg mb-5 bg-white rounded">
    <div class="card">
      <div class="card-header">
        Login
      </div>
      <div class="card-body">

        <form>
          <!--12306 Username-->
          <div class="form-group">
            <label>12306 Username</label>
            <Input
              v-model="trainSite.username"
              placeholder="12306 Username"
              size="large"
              type="text"
            />
          </div>
          <!--12306 Password-->
          <div class="form-group">
            <label>12306 Password</label>
            <Input
              v-model="trainSite.password"
              placeholder="12306 Password"
              size="large"
              type="password"
            />
          </div>
          <!--login button-->
          <button type="button" class="btn btn-primary btn-lg btn-block" @click="login()">Login</button>
          <!--progress-->
          <div class="progress-position">
            <!--no display but placehold-->
            <!--<div class="spinner-border text-info loading" role="status" :style="loading">-->
            <div class="spinner-border text-info loading" role="status" v-show="this.progressShow">
              <!--<span class="sr-only" >Loading...</span>-->
              <!--<i class="fas fa-spinner"></i>-->
            </div>
          </div>


        </form>

      </div>
    </div>

  </div>
</template>

<script>
    import {apiUrl} from "@/javascript/apiUrl";
    export default {
      name: "LoginTest",
      data () {
        return {
          progressShow: false,
          returnResult: null,
          trainSite: {
            username: null,
            password: null
          },
        }
      },
      methods: {
        login(){
          this.progressShow = true;
          this.axios({
            url: apiUrl.user.login.url,
            method: apiUrl.user.login.method,
            data: JSON.stringify({
              "username12306": this.trainSite.username,
              "password12306": this.trainSite.password
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response=>{
              if (response.data.status){
                // login success
                this.jumpPage("Backstage");
              }else {
                // login failed
                this.$Modal.error({
                  title: "Login Failed",
                  content: response.data.message,
                  okText: "OK",
                });
              }
            })
            .catch(error =>{
              this.promptError();
            })
            .finally(()=>{
              this.progressShow = false;
            })
        },
        jumpPage(pageName) {
          this.$router.push({
            name: pageName,
          })
        },
        promptError() {
          this.$Modal.error({
            title: "Error",
            content: "An error has occurred, please try again.",
            okText: "OK",
          })
        },
      },
      created() {
      }

    }
</script>

<style scoped>
  .root-div{
    width: 350px;
    /*border: 1px red solid;*/
    text-align: left;
  }
  .text-info{
    /*margin: 0 0px 0 0px;*/
  }
  .btn-primary{
    /*margin: -10px 0px 10px 198px;*/
    /*margin: 20px;*/
  }

  .progress-position{
    text-align: center;
    /*border: 1px red solid;*/
    margin: 10px 0 0 0;
  }

  .loading{
  }
</style>

<template>
  <div class="layout">
    <Layout>
      <Header class="index-background-color">
        <Menu class="index-background-color" @on-select="logout" mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <i class="fas fa-train animated zoomIn bounce delay-1s" style="font-size: 24px"></i>
          </div>
          <div class="layout-nav">
            <!--<MenuItem name="1">-->
              <!--<Icon type="ios-navigate"></Icon>-->
              <!--Add Task-->
            <!--</MenuItem>-->
            <!--<MenuItem name="2">-->
              <!--<Icon type="ios-keypad"></Icon>-->
              <!--Query Task-->
            <!--</MenuItem>-->
            <!--<MenuItem name="3">-->
              <!--<Icon type="ios-analytics"></Icon>-->
              <!--Delete Task-->
            <!--</MenuItem>-->
            <!--<MenuItem name="4">-->
              <!--<Icon type="ios-analytics"></Icon>-->
              <!--Update Task-->
            <!--</MenuItem>-->
            <MenuItem  name="logout">
              <i class="fas fa-sign-out-alt"></i>
              Logout
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{height: 'calc(100vh - 107)', background: '#fff'}">

          <Menu @on-select="getMenuName" active-name="1-2" theme="light" width="auto" :open-names="['1']">

            <Submenu name="submenu-insert">
              <template slot="title">
                <i class="fas fa-plus"></i>
                Add Task
              </template>
              <MenuItem name="insert-task">Add Task</MenuItem>
            </Submenu>

            <!--<Submenu name="submenu-delete">-->
            <!--<template slot="title">-->
            <!--<Icon type="ios-keypad"></Icon>-->
            <!--Delete Task-->
            <!--</template>-->
            <!--<MenuItem name="delete-task">Delete Task</MenuItem>-->
            <!--</Submenu>-->

            <!--<Submenu name="submenu-update">-->
            <!--<template slot="title">-->
            <!--<Icon type="ios-analytics"></Icon>-->
            <!--Update Task-->
            <!--</template>-->
            <!--<MenuItem name="update-task">Update Task</MenuItem>-->
            <!--</Submenu>-->

            <Submenu name="submenu-query">
              <template slot="title" >
                <i class="fas fa-search"></i>
                Query Task
              </template>
              <MenuItem name="query-wait-task">Query Wait Task</MenuItem>
              <MenuItem name="query-running-task">Query Running Task</MenuItem>
              <MenuItem name="query-failed-task">Query Failed Task</MenuItem>
              <MenuItem name="query-completed-task">Query Completed Task</MenuItem>
              <MenuItem name="query-all-task">Query All Task</MenuItem>
            </Submenu>

          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{margin: '24px 6px 115px 6px', padding: '12px', minHeight: '710px', background: '#fff'}" class="shadow p-3 bg-white rounded">
            <router-view
              :key="$route.path + $route.query.timeValue"
              :cityJson="cityJson"
              :purposeCodeJson="purposeCodeJson"
              :documentTypeJson="documentTypeJson"
              :seatTypeJson="seatTypeJson"
              :expectSeatNumberJson="expectSeatNumberJson"
              :emailSuffixJson="emailSuffixJson"
            ></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import {apiUrl} from "@/javascript/apiUrl";
  export default {
    name: "Backstage",
    data () {
      return {
        cityJson: [],
        purposeCodeJson: [],
        documentTypeJson: [],
        seatTypeJson: [],
        expectSeatNumberJson: [],
        emailSuffixJson: [],
      }
    },
    methods:{
      getCityJson() {
        this.axios({
          url: apiUrl.initialization.cityJson.url,
          method: apiUrl.initialization.cityJson.method,
        })
          .then(response => {
            this.cityJson = response.data;
          })
          .catch(()=>{
            this.promptError();
          })
      },
      getPurposeCodeJson() {
        this.axios({
          url: apiUrl.initialization.purposeCodeJson.url,
          method: apiUrl.initialization.purposeCodeJson.method,
        })
          .then(response => {
            this.purposeCodeJson = response.data;
          })
          .catch(()=>{
            this.promptError();
          })
      },
      getDocumentTypeJson() {
        this.axios({
          url: apiUrl.initialization.documentTypeJson.url,
          method: apiUrl.initialization.documentTypeJson.method,
        })
          .then(response => {
            this.documentTypeJson = response.data;
          })
          .catch(()=>{
            this.promptError();
          })
      },
      getSeatTypeJson() {
        this.axios({
          url: apiUrl.initialization.seatTypeJson.url,
          method: apiUrl.initialization.seatTypeJson.method,
        })
          .then(response => {
            this.seatTypeJson = response.data;
          })
          .catch(()=>{
            this.promptError();
          })
      },
      getExpectSeatNumberJson() {
        this.axios({
          url: apiUrl.initialization.expectSeatNumberJson.url,
          method: apiUrl.initialization.expectSeatNumberJson.method,
        })
          .then(response => {
            this.expectSeatNumberJson = response.data;
          })
          .catch(()=>{
            this.promptError();
          })
      },
      getEmailSuffixJson() {
        this.axios({
          url: apiUrl.initialization.emailSuffixJson.url,
          method: apiUrl.initialization.emailSuffixJson.method,
        })
          .then(response => {
            this.emailSuffixJson = response.data;
          })
          .catch(()=>{
            this.promptError();
          })
      },
      getMenuName(nameString){
        let names = nameString.split("-");
        if (names.length > 1){
          if (names[0] === "query"){
            switch (names[1]) {
              case "wait":
                this.jumpQueryPage("Query", apiUrl.task.query.getInformationByStatusWait.url, apiUrl.task.query.getInformationByStatusWait.method);
                break;
              case "running":
                this.jumpQueryPage("Query", apiUrl.task.query.getInformationByStatusRunning.url, apiUrl.task.query.getInformationByStatusRunning.method);
                break;
              case "failed":
                this.jumpQueryPage("Query", apiUrl.task.query.getInformationByStatusBookingFailed.url, apiUrl.task.query.getInformationByStatusBookingFailed.method);
                break;
              case "completed":
                this.jumpQueryPage("Query", apiUrl.task.query.getStatusInformationTableListBySuccess.url, apiUrl.task.query.getStatusInformationTableListBySuccess.method);
                break;
              case "all":
                this.jumpQueryPage("Query", apiUrl.task.query.getUserAllTask.url, apiUrl.task.query.getUserAllTask.method);
                break;
            }
          }
          if (names[0] === "insert"){
            switch (names[1]) {
              case "task":
                this.jumpPage("Insert");
                break;
            }
          }
          if (names[0] === "delete"){
            switch (names[1]) {
              case "task":
                this.jumpPage("Delete");
                break;
            }
          }
          if (names[0] === "update"){
            switch (names[1]) {
              case "task":
                this.jumpPage("Update");
                break;
            }
          }
        }
      },
      logout(){
        this.$Modal.confirm({
          title: "Logout",
          content: "Are you sure you want to logout?",
          okText: "OK",
          cancelText: "Cancel",
          onOk: ()=>{
            this.axios({
              url: apiUrl.user.logout.url,
              method: apiUrl.user.logout.method,
            })
              .then(response=>{
                console.log(response)
              })
              .catch(()=>{

              })
              .finally(()=>{

              });
            this.jumpPage("Home");
          },

        })
      },
      jumpPage(pageName) {
        this.$router.push({
          name: pageName,
          query:{
            timeValue: Date.now()
          },
        });
      },
      jumpQueryPage(pageName, targetUrl, methodName) {
        this.$router.push({
          name: pageName,
          query:{
            timeValue: Date.now()
          },
          params:{
            targetUrl: targetUrl,
            methodName: methodName
          }
        });
      },
    },
    created() {
      // init
      this.getCityJson();
      this.getPurposeCodeJson();
      this.getDocumentTypeJson();
      this.getSeatTypeJson();
      this.getExpectSeatNumberJson();
      this.getEmailSuffixJson();
      // jump welcome page
      this.jumpPage("BackstageWelcome");
    }
  }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    top: -48px;
    border-radius: 4px;
    overflow: hidden;
    height: calc(100vh - 107px);
    /*border: 1px red solid;*/
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    color: aliceblue;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 5px;
    /*left: 20px;*/
    /*border: 1px red solid;*/
  }
  .layout-nav{
    /*text-align: right;*/
    width: 40%;
    margin: 0 auto 0 95%
    /*margin-right: 50px;*/
  }
  .index-background-color{
    background: #405B55;
  }
</style>

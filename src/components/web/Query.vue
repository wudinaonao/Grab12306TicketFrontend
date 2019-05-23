<template>
  <div class="root-div">
    <table class="table table-striped shadow p-3 mb-5 bg-white rounded" style="border: 1px beige solid">
      <thead class="table-dark index-background-color">
      <tr>
        <th scope="col">Select</th>
        <th scope="col">After Time</th>
        <th scope="col">Before Time</th>
        <th scope="col">Train Date</th>
        <th scope="col">From Station</th>
        <th scope="col">To Station</th>
        <th scope="col">Train Name</th>
        <th scope="col">Passenger Name</th>
        <th scope="col">Operation</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in resultList">
          <!--Select -->
          <td>
            <CheckboxGroup v-model="selectedItem"
                           size="large"
                           style="height: 24px"
            >
              <Checkbox :label="result.grabTicketInformationEntity.hash"
                        size="large"

              >
                <span></span>
              </Checkbox>
            </CheckboxGroup>
          </td>
          <td>{{ result.grabTicketInformationEntity.afterTime }}</td>
          <td>{{ result.grabTicketInformationEntity.beforeTime }}</td>
          <td>{{ result.grabTicketInformationEntity.trainDate }}</td>
          <td>{{ result.grabTicketInformationEntity.fromStation }}</td>
          <td>{{ result.grabTicketInformationEntity.toStation }}</td>
          <td>{{ result.grabTicketInformationEntity.trainName }}</td>
          <td>{{ result.grabTicketInformationEntity.passengerName }}</td>
          <td>
            <!--<Dropdown style="margin-left: 20px;">-->
              <!--<a href="javascript:void(0)">-->
                <!--<button type="button" class="btn btn-outline-info">More</button>-->
                <!--&lt;!&ndash;<Icon type="ios-arrow-down"></Icon>&ndash;&gt;-->
              <!--</a>-->
              <!--<DropdownMenu slot="list">-->
                <!--<DropdownItem :name="result.grabTicketInformationEntity.hash" @on-click="jumpDetails">Details</DropdownItem>-->
                <!--<DropdownItem :name="result.grabTicketInformationEntity.hash" @on-click="jumpDelete">Delete</DropdownItem>-->
                <!--<DropdownItem :name="result.grabTicketInformationEntity.hash" @on-click="jumpUpdate">Update</DropdownItem>-->
              <!--</DropdownMenu>-->
            <!--</Dropdown>-->
            <div class="dropdown">
              <button class="btn btn-outline-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" @click="requestDetails(result.grabTicketInformationEntity.hash)" >Details</a>
                <a class="dropdown-item" @click="requestDelete(result.grabTicketInformationEntity.hash)" >Delete</a>
                <a class="dropdown-item" @click="requestUpdate(result.grabTicketInformationEntity.hash)" >Update</a>
              </div>
            </div>
          </td>

        </tr>
      </tbody>
    </table>
    <!--display task details information-->
    <Drawer
      :closable="false"
      v-model="detailsDrawerShow"
      width="1000"
    >
      <div class="">
        <h5 style="color:#333333;">
          <i v-show="iconShow.info" class="fas fa-info-circle" style="font-size: 32px; margin: 0 24px 0 24px; color: #005CAF"></i>
          <i v-show="iconShow.success" class="fas fa-check-circle" style="font-size: 32px; margin: 0 24px 0 24px; color: #00AA90"></i>
          <i v-show="iconShow.failed"  class="fas fa-times-circle" style="font-size: 32px; margin: 0 24px 0 24px; color: #C73E3A"></i>
          <i v-show="iconShow.running"  class="fas fa-running" style="font-size: 32px; margin: 0 24px 0 24px; color: #876633"></i>
          Task Details Information
        </h5>
      </div>
      <h1 v-show="detailsLoading">Loading ...</h1>
      <Divider/>
      <div class="card shadow bg-white rounded">
        <div class="card-body">
          <!--Information-->
          <div class="information" style="margin: 5px; font-size: 14px; font-family:'Microsoft Yahei', Helvetica, Arial, sans-serif;">
            <!--Header-->
            <div class="row" style="font-size: 20px">
              <div class="col-6 col-md-6">
                <p>Ticket Information</p>
              </div>
              <div class="col-6 col-md-6">
                <p>Notification Mode</p>
              </div>
            </div>
            <div class="row align-items-start grab-ticket-information">
              <!--Grab ticket information-->
              <div class="col-6 col-md-3">
                <p>After Time</p>
                <p>Before Time</p>
                <p>Train Date</p>
                <p>From Station</p>
                <p>To Station</p>
                <p>Purpose Code</p>
                <p>Train Number</p>
                <p>Back Train Date</p>
                <p>Passenger Name</p>
                <p>Document Type</p>
                <p>Document Number</p>
                <p>Mobile</p>
                <p>Seat Type</p>
                <p>Expect Seat Number</p>
              </div>
              <div class="col-6 col-md-3 notification-information">
                <p>{{taskDetails.grabTicketInformation.afterTime}}</p>
                <p>{{taskDetails.grabTicketInformation.beforeTime}}</p>
                <p>{{taskDetails.grabTicketInformation.trainDate}}</p>
                <p>{{taskDetails.grabTicketInformation.fromStation}}</p>
                <p>{{taskDetails.grabTicketInformation.toStation}}</p>
                <p>{{taskDetails.grabTicketInformation.purposeCode}}</p>
                <p>{{emptyValueReplace(taskDetails.grabTicketInformation.trainName)}}</p>
                <p>{{emptyValueReplace(taskDetails.grabTicketInformation.backTrainDate)}}</p>
                <p>{{taskDetails.grabTicketInformation.passengerName}}</p>
                <p>{{documentTypeNumberToName(taskDetails.grabTicketInformation.documentType)}}</p>
                <p>{{taskDetails.grabTicketInformation.documentNumber}}</p>
                <p>{{taskDetails.grabTicketInformation.mobile}}</p>
                <p>{{taskDetails.grabTicketInformation.seatType}}</p>
                <p>{{taskDetails.grabTicketInformation.expectSeatNumber}}</p>
              </div>
              <!--Notification information-->
              <div class="col-6 col-md-3">
                <p>Receiver Email</p>
                <p>Send Email</p>
                <p>Send Email Host</p>
                <p>Send Email Port</p>
                <p>Send Email Username</p>
                <p>Send Email Password</p>
                <p>Receiver Phone</p>
                <p>Notification Mode</p>
              </div>
              <div class="col-6 col-md-3">
                <p>{{taskDetails.notificationInformation.receiverEmail}}</p>
                <p>{{taskDetails.notificationInformation.sendEmail}}</p>
                <p>{{taskDetails.notificationInformation.sendEmailHost}}</p>
                <p>{{taskDetails.notificationInformation.sendEmailPort}}</p>
                <p>{{taskDetails.notificationInformation.sendEmailUsername}}</p>
                <p>{{taskDetails.notificationInformation.sendEmailPassword}}</p>
                <p>{{taskDetails.notificationInformation.receiverPhone}}</p>
                <p>{{taskDetails.notificationInformation.notificationMode}}</p>
              </div>
            </div>
            <Divider></Divider>
            <div class="row status-inforamtion">
              <div class="col-6 col-md-3">
                <p>Task Status</p>
                <p>Number of attempts</p>
                <p>Message</p>
              </div>
              <div class="col-6 col-md-3">
                <p>{{taskDetails.statusInformation.status}}</p>
                <p>{{taskDetails.statusInformation.tryCount}}</p>
                <p>{{taskDetails.statusInformation.message}}</p>
              </div>
              <div class="col-6 col-md-3">
                <p>Task Start Time</p>
                <p>Task End Time</p>
                <p>Task Last Time</p>
              </div>
              <div class="col-6 col-md-3">
                <p>{{taskDetails.statusInformation.taskStartTime}}</p>
                <p>{{taskDetails.statusInformation.taskEndTime}}</p>
                <p>{{taskDetails.statusInformation.taskLastRunTime}}</p>
              </div>
            </div>
            <Divider></Divider>
          </div>
        </div>
      </div>

    </Drawer>
    <!--<p>Result: {{returnResult}}</p>-->
  </div>
</template>

<script>
  import {apiUrl} from "@/javascript/apiUrl";
    export default {
      name: "Query",
      data (){
        return{
          // returnResult: null,
          resultList: null,
          selectedItem: [],
          detailsHash: null,
          deleteHash: null,
          updateHash: null,
          detailsDrawerShow: false,
          detailsLoading: false,
          taskDetails:{
            grabTicketInformation: {
              afterTime: "",
              backTrainDate: "",
              beforeTime: "",
              documentNumber: "",
              documentType: "",
              expectSeatNumber: "",
              fromStation: "",
              mobile: "",
              hash: "",
              passengerName: "",
              purposeCode: "",
              seatType: "",
              toStation: "",
              trainDate: "",
              trainName: "",
            },
            notificationInformation: {
              hash: "",
              notificationMode: "",
              receiverEmail: "",
              receiverPhone: "",
              sendEmail: "",
              sendEmailHost: "",
              sendEmailPassword: "",
              sendEmailPort: "",
              sendEmailUsername: "",
            },
            statusInformation: {
              hash: "",
              message: "",
              status: "",
              taskEndTime: "",
              taskLastRunTime: "",
              taskStartTime: "",
              tryCount: "",
            },
          },
          // documentTypeJson: [],
          iconShow:{
            info: false,
            success: true,
            failed: false,
            running: false
          },
        }
      },
      methods:{
        emptyValueReplace(value){
          if (value.trim() === "" || value == null){
            return "　";
          }
          return value;
        },
        documentTypeNumberToName(number){
          let item;
          for (item of this.$attrs.documentTypeJson){
            if (item.value.trim() === number){
              return item.label;
            }
          }
          return number;
        },
        queryByStatus(url, method){
          this.axios({
            url: url,
            method: method,
          })
            .then(response=>{
              if (response.data.status){
                // success
                this.resultList = response.data.result;
              }else{
                // failed
                this.$Modal.error({
                  title: "Failed",
                  content: response.data.message,
                  okText: "OK",
                });
              }
            })
            .catch(error =>{
              console.log(error);
              this.promptError();
            })
            .finally(()=>{
              // this.loading = "visibility:hidden";
            })
        },
        requestDetails(hash){
          // maybe not jump
          // open drawer
          this.detailsDrawerShow = true;
          // request details
          this.axios({
            url: apiUrl.task.query.getGrabTicketAndNotificationInformationByHash.url,
            method: apiUrl.task.query.getGrabTicketAndNotificationInformationByHash.method,
            params:{
              "hash": hash
            }
          })
            .then(response=>{
              if (response.data.status){
                // success
                this.taskDetails.grabTicketInformation = response.data.result[0].grabTicketInformationEntity;
                this.taskDetails.notificationInformation = response.data.result[0].notificationInformationEntity;
                this.taskDetails.statusInformation = response.data.result[0].statusInformationEntity;
                // show icon
                this.iconShow.info = false;
                this.iconShow.success = false;
                this.iconShow.failed = false;
                this.iconShow.running = false;
                switch (this.taskDetails.statusInformation.status) {
                  case "wait":
                    this.iconShow.running = true;
                    break;
                  case "running":
                    this.iconShow.running = true;
                    break;
                  case "booking failed":
                    this.iconShow.failed = true;
                    break;
                  case "booking succeed but send notification failed":
                    this.iconShow.info = true;
                    break;
                  case "completed":
                    this.iconShow.success = true;
                    break;
                }
              }else{
                // failed
                this.$Modal.error({
                  title: "Failed",
                  content: response.data.message,
                  okText: "OK",
                });
              }
            })
            .catch(error =>{
              console.log(error);
              this.promptError();
            })
            .finally(()=>{
              this.detailsLoading = false;
            })
        },
        requestDelete(hash){
          // maybe not jump
          this.$Modal.confirm({
            title: "Delete Task",
            content: "Are you sure you want to delete this task?",
            okText: "OK",
            cancelText: "Cancel",
            onOk: () => {
              this.axios({
                url: apiUrl.task.delete.url,
                method: apiUrl.task.delete.method,
                data: JSON.stringify({
                  "hash": hash
                }),
                headers:{
                  "Content-Type": "application/json"
                }
              })
                .then(response=>{
                  if (response.data.status) {
                    // this.$router.go(0);
                  }else {
                    // failed
                    this.$Modal.error({
                      title: "Failed",
                      content: response.data.message,
                      okText: "OK",

                    });
                  }
                })
                .catch(error =>{
                  this.promptError();
                })
                .finally(()=>{
                  // this.loading = "visibility:hidden";
                })
            },
          });
        },
        requestUpdate(hash){
          this.$router.push({
            name: "Update",
            params:{
              hash: hash
            }
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
        this.queryByStatus(this.$route.params.targetUrl, this.$route.params.methodName);
      },

    }
</script>

<style scoped>
  .root-div{

  }

  .index-background-color{
    background: #405B55;
  }

</style>

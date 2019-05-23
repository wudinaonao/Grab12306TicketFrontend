<template>
  <div class="root-div">
    <div class="row root-row">
      <div class="col root-col-1">
        <!--Grab ticket information-->
        <form>
          <!--after before time-->
          <div class="row after-before-time-and-train-date-row">
            <div class="col form-group">
              <label>Time Interval</label>
              <br>
              <TimePicker
                :value="afterAndBeforeTimeRangeArray"
                @on-change="setAfterTimeAndBeforeTime"
                format="HH:mm"
                type="timerange"
                placement="bottom-end"
                placeholder="Select Start and End Time"
                size="large"
              ></TimePicker>
            </div>
            <!--Train date-->
            <div class="col form-group">
              <label style="margin-right: 18px">Train Date</label>
              <br>
              <DatePicker
                :value="grabTicketInformation.trainDate"
                type="date"
                placeholder="Train Date"
                id="trainDate"
                format="yyyy-MM-dd"
                @on-change="setTrainDate"
                size="large"></DatePicker>
            </div>
          </div>
          <!--From station and To station-->
          <div class="row station-row">
            <div class="col form-group">
              <label>From Station</label>
              <Cascader
                :data="this.$attrs.cityJson"
                :value="fromStation"
                filterable
                trigger="hover"
                size="large"
                not-found-text="Not found"
                @on-change="setFromStationName"
              ></Cascader>
            </div>
            <div class="col form-group">
              <label>To Station</label>
              <Cascader
                :data="this.$attrs.cityJson"
                :value="toStation"
                filterable
                trigger="hover"
                size="large"
                not-found-text="Not found"
                @on-change="setToStationName"
              ></Cascader>
            </div>
          </div>
          <!--Train Number and Back Train Date-->
          <div class="row train-number-and-back-train-date-row">
            <!--Train Number-->
            <div class="col form-group">
              <label>Train Number</label>
              <Input
                v-model="grabTicketInformation.trainName"
                placeholder="Train Number"
                size="large"
              />
            </div>
            <!--Back Train Date-->
            <div class="col form-group">
              <label>Back Train Date</label>
              <Input
                v-model="grabTicketInformation.backTrainDate"
                placeholder="Back Train Date"
                size="large"
                disabled
              />
            </div>
          </div>
          <!--Passenger Name and Purpose Code-->
          <div class="row passenger-name-and-purpose-code-row">
            <!--Passenger Name-->
            <div class="col form-group">
              <label>Passenger Name</label>
              <Input
                v-model="grabTicketInformation.passengerName"
                placeholder="Passenger Name"
                size="large"
              />
            </div>
            <!--Purpose Code-->
            <div class="col form-group">
              <label>Passenger Type</label>
              <Select
                v-model="grabTicketInformation.purposeCode"
                size="large">
                <Option
                  v-for="item in this.$attrs.purposeCodeJson"
                  :value="item.value"
                  :key="item.value">
                  {{ item.label }}
                </Option>
              </Select>
            </div>
          </div>
          <!--Document Type and Number-->
          <div class="row document-type-and-number-row">
            <!--Document Number-->
            <div class="col form-group">
              <label>Document Number</label>
              <Input
                v-model="grabTicketInformation.documentNumber"
                placeholder="Document Number"
                size="large"
              />
            </div>
            <!--Document Type-->
            <div class="col form-group">
              <label>Document Type</label>
              <Select
                v-model="grabTicketInformation.documentType"
                size="large">
                <Option
                  v-for="item in this.$attrs.documentTypeJson"
                  :value="item.value"
                  :key="item.value">
                  {{ item.label }}
                </Option>
              </Select>
            </div>
          </div>
          <!--mobili-->
          <div class="row mobili-row">
            <!--Mobile-->
            <div class="col form-group">
              <label>Mobile</label>
              <Input
                v-model="grabTicketInformation.mobile"
                placeholder="Mobile"
                size="large"
              />
            </div>
          </div>
          <!--seat type and expect seat number-->
          <div class="row seat-type-and-expect-seat-number-row">
            <!--Seat Type-->
            <div class="col form-group">
              <label>Seat Type</label>
              <Select
                v-model="grabTicketInformation.seatType"
                multiple
                size="large">
                <Option
                  v-for="item in this.$attrs.seatTypeJson"
                  :value="item.value"
                  :key="item.value">
                  {{ item.label }}
                </Option>
              </Select>
            </div>
            <!--Expect Seat Number-->
            <div class="col form-group">
              <label>Expect Seat Number</label>
              <Select
                v-model="grabTicketInformation.expectSeatNumber"
                size="large">
                <Option
                  v-for="item in this.$attrs.expectSeatNumberJson"
                  :value="item.value"
                  :key="item.value">
                  {{ item.label }}
                </Option>
              </Select>
            </div>
          </div>
        </form>
      </div>
      <div class="col root-col-2">
        <!--Notification information-->
        <form>

          <!--Receiver Email-->
          <div class="form-group">
            <label>Receiver Email</label>
            <Input
              v-model="notificationInformation.receiverEmail"
              placeholder="Receiver Email"
              size="large"
              type="email"
            />
          </div>

          <!--Send Email-->
          <div class="form-group">
            <label>Send Email</label>
            <Input
              v-model="notificationInformation.sendEmail"
              placeholder="Send Email"
              size="large"
              type="email"
            />
          </div>

          <!--Send Email Host and Port-->
          <div class="row host-port-row">
            <!--Send Email Host-->
            <div class="col form-group">
              <label>Send Email Host</label>
              <Input
                v-model="notificationInformation.sendEmailHost"
                placeholder="Send Email Host"
                size="large"
                type="text"
              />
            </div>

            <!--Send Email Port-->
            <div class="col form-group">
              <label>Send Email Port</label>
              <Input
                v-model="notificationInformation.sendEmailPort"
                placeholder="Send Email Port"
                size="large"
                type="number"
              />
            </div>
          </div>


          <!--Send Email Username-->
          <div class="form-group">
            <label>Send Email Username</label>
            <Input
              v-model="notificationInformation.sendEmailUsername"
              placeholder="Send Email Username"
              size="large"
              type="text"
            />
          </div>

          <!--Send Email Password-->
          <div class="form-group">
            <label>Send Email Password</label>
            <Input
              v-model="notificationInformation.sendEmailPassword"
              placeholder="Send Email Password"
              size="large"
              type="password"
            />
          </div>

          <!--Receiver Phone-->
          <div class="form-group">
            <label>Receiver Phone</label>
            <Input
              v-model="notificationInformation.receiverPhone"
              placeholder="Receiver Phone"
              size="large"
              type="number"
            />
          </div>

          <!--Notification Mode-->
          <div class="form-group">
            <label>Notification Mode</label>
            <CheckboxGroup
              v-model="notificationInformation.notificationMode"
              size="large"
            >
              <Checkbox label="EMAIL" size="large"></Checkbox>
              <Checkbox label="SMS" size="large"></Checkbox>
              <Checkbox label="PHONE" size="large"></Checkbox>
            </CheckboxGroup>
          </div>

        </form>
      </div>
    </div>
    <!--update button-->
    <div style="text-align: right">
      <button
        type="button"
        class="btn btn-primary"
        @click="confirmDrawerShow = true"
      >Update
      </button>
    </div>

    <Drawer
            :closable="false"
            v-model="confirmDrawerShow"
            width="720"
    >
      <h3>Confirm Updata Task Information</h3>
      <Divider/>
      <div class="drawer-footer">
        <Button style="margin-right: 8px; font-size: 20px" @click="confirmDrawerShow = false">Cancel</Button>
        <Button style="font-size: 20px" type="primary" @click="updateTask()">Update</Button>
      </div>
    </Drawer>


  </div>
</template>

<script>
    import {apiUrl} from "@/javascript/apiUrl";
    export default {
      name: "Update",
      data () {
        return {
          grabTicketInformation: {
            "afterTime": null,
            "beforeTime": null,
            "trainDate": null,
            "fromStation": null,
            "toStation": null,
            "purposeCode": null,
            "trainName": null,
            "backTrainDate": null,
            "passengerName": null,
            "documentType": null,
            "documentNumber": null,
            "mobile": null,
            "seatType": [],
            "expectSeatNumber": null,
          },
          grabTicketInformationNameList:[
            "After Time",
            "Before Time",
            "Train Date",
            "From Station",
            "To Station",
            "Purpose Code",
            "Train Number",
            "Back Train Date",
            "Passenger Name",
            "Document Type",
            "Document Number",
            "Mobile",
            "Seat Type",
            "Expect Seat Number"
          ],
          notificationInformation: {
            "receiverEmail": null,
            "sendEmail": null,
            "sendEmailHost": null,
            "sendEmailPort": null,
            "sendEmailUsername": null,
            "sendEmailPassword": null,
            "receiverPhone": null,
            "notificationMode": []
          },
          notificationinformationNameList:[
            "Receiver Email",
            "Send Email",
            "Send Email Host",
            "Send Email Port",
            "Send Email Username",
            "Send Email Password",
            "Receiver Phone",
            "Notification Mode"
          ],
          afterAndBeforeTimeRangeArray: [],
          fromStation: [],
          toStation: [],
          notificationModeJson: [],
          confirmDrawerShow: false,
          apiUrl: {}
        }
      },
      methods:{
        // format frontend data for send to backend
        setTrainDate(date) {
          this.grabTicketInformation.trainDate = date;
        },
        setAfterTimeAndBeforeTime(time) {
          this.grabTicketInformation.afterTime = time[0];
          this.grabTicketInformation.beforeTime = time[1];
        },
        setFromStationName(value, selectedData){
          this.grabTicketInformation.fromStation = selectedData[1].label;
        },
        setToStationName(value, selectedData){
          this.grabTicketInformation.toStation = selectedData[1].label;
        },
        // format data from the backend
        formatSeatTypeStringToArray(string){
          this.grabTicketInformation.seatType = string.split(",").map(x=>x.trim());
        },
        formatNotificationModeStringToArray(string){
          this.notificationInformation.notificationMode = string.split(",").map(x=>x.trim());
        },
        formatAfterAndBeforeTime(afterString, beforeString){
          this.afterAndBeforeTimeRangeArray = [
            afterString.trim(),
            beforeString.trim()
          ]
        },
        formatStation(targetList, cityName){
          let province;
          let city;
          for (province of this.$attrs.cityJson){
            for (city of province.children){
              if (city.label.trim() === cityName.trim()){
                targetList.push(province.value);
                targetList.push(city.value);
                break;
              }
            }
          }
        },
        formatNotificationModeToUpper(){
          this.notificationInformation.notificationMode = this.notificationInformation.notificationMode.toUpperCase();
        },
        // update task to backend
        updateTask(){
          //
          // send request
          this.axios({
            url: apiUrl.task.update.url,
            method: apiUrl.task.update.method,
            data: JSON.stringify({
              "grabticketinformation": this.grabTicketInformation,
              "notificationinformation": this.notificationInformation
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => {
              // requests success
              if (response.data.status) {
                // add task success
                this.$Modal.success({
                  title: "Success",
                  content: response.data.message,
                  okText: "OK",
                  onOk: this.jumpQueryPage(apiUrl.task.query.getUserAllTask.url, apiUrl.task.query.getUserAllTask.method),
                });
              } else {
                // add task failed
                this.$Modal.error({
                  title: "Failed",
                  content: response.data.message,
                  okText: "OK",
                });
              }
            })
            .catch(() => {
              this.promptError();
            })
            .finally(() => {
              // closed drawer
              this.confirmDrawerShow = false;
            })
        },
        // get task information by hash
        getTaskInformation(hash){
          this.axios({
            url: apiUrl.task.query.getGrabTicketAndNotificationInformationByHash.url,
            method: apiUrl.task.query.getGrabTicketAndNotificationInformationByHash.method,
            params: {
              "hash": hash
            }
          })
            .then(response=>{
              if (response.data.status){
                // success
                this.grabTicketInformation = response.data.result[0].grabTicketInformationEntity;
                this.notificationInformation = response.data.result[0].notificationInformationEntity;
                // format data from the backend
                this.formatSeatTypeStringToArray(this.grabTicketInformation.seatType);
                this.formatNotificationModeToUpper();
                this.formatNotificationModeStringToArray(this.notificationInformation.notificationMode);
                this.formatAfterAndBeforeTime(this.grabTicketInformation.afterTime, this.grabTicketInformation.beforeTime);
                this.formatStation(this.fromStation, this.grabTicketInformation.fromStation);
                this.formatStation(this.toStation, this.grabTicketInformation.toStation);

              }else{
                // failed
                this.$Modal.error({
                  title: "Failed",
                  content: response.data.message,
                  okText: "OK",
                  onOk: this.jumpQueryPage(apiUrl.task.query.getUserAllTask.url, apiUrl.task.query.getUserAllTask.method)
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
        handleEmailCompletion(value){
          this.$attrs.emailSuffixJson = !value || value.indexOf('@') >= 0 ? [] : [
            value + '@qq.com',
            value + '@sina.com',
            value + '@163.com'
          ];
        },
        promptError() {
          this.$Modal.error({
            title: "Error",
            content: "An error has occurred, please try again.",
            okText: "OK",
          })
        },
        jumpQueryPage(queryUrl, methodName) {
          this.$router.push({
            name:"Query",
            params:{
              queryUrl: queryUrl,
              methodName: methodName
            }
          });
        },
      },
      created() {
        // get task information by hash
        this.getTaskInformation(this.$route.params.hash);
      },
      mounted(){
        this.apiUrl = apiUrl;
      }
    }
</script>

<style scoped>
  .drawer-footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
</style>

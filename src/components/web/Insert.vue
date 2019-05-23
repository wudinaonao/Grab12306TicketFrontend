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
                  :grabTicketInformation.trainDate="grabTicketInformation.trainDate"
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
              placeholder="Send Email"
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
    <div style="text-align: right">
      <button
        type="button"
        class="btn btn-primary"
        @click="addTask()"
      >Submit
      </button>
    </div>
  </div>
</template>

<script>
    import {apiUrl} from "@/javascript/apiUrl";
    export default {
      name: "Insert",
      data (){
        return{
          grabTicketInformation: {
            "afterTime": null,
            "beforeTime": null,
            "trainDate": null,
            "fromStation": null,
            "toStation": null,
            "purposeCode": "ADULT",
            "trainName": null,
            "backTrainDate": null,
            "passengerName": null,
            "documentType": null,
            "documentNumber": null,
            "mobile": null,
            "seatType": null,
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
          cityJson: [],
          fromStation: [],
          toStation: [],
          purposeCodeJson: [],
          documentTypeJson: [],
          seatTypeJson: [],
          expectSeatNumberJson: [],
          emailSuffixJson: [],
          notificationModeJson: [],
        }
      },
      methods: {
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
        addTask() {
          // send request
          this.axios({
            url: apiUrl.task.insert.url,
            method: apiUrl.task.insert.method,
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

            })
        },
        promptError() {
          this.$Modal.error({
            title: "Error",
            content: "An error has occurred, please try again.",
            okText: "OK",
          })
        },
        jumpQueryPage(queryUrl) {
          this.$router.push({
            name:"Query",
            params:{
              queryUrl: queryUrl
            }
          });
        },
      },

      created() {
      }
    }
</script>

<style scoped>
  .root-div{
    margin: 24px;
    height: 100%;
  }
</style>

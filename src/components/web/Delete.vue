<!--<template>-->
  <!--<div class="root-div">-->
    <!--<table class="table table-striped">-->
      <!--<thead>-->
      <!--<tr>-->
        <!--<th scope="col">Select</th>-->
        <!--<th scope="col">After Time</th>-->
        <!--<th scope="col">Before Time</th>-->
        <!--<th scope="col">Train Date</th>-->
        <!--<th scope="col">From Station</th>-->
        <!--<th scope="col">To Station</th>-->
        <!--&lt;!&ndash;<th scope="col">PurposeCode</th>&ndash;&gt;-->
        <!--<th scope="col">Train Name</th>-->
        <!--&lt;!&ndash;<th scope="col">Back Train Data</th>&ndash;&gt;-->
        <!--<th scope="col">Passenger Name</th>-->
        <!--&lt;!&ndash;<th scope="col">Document Type</th>&ndash;&gt;-->
        <!--&lt;!&ndash;<th scope="col">Document Number</th>&ndash;&gt;-->
        <!--&lt;!&ndash;<th scope="col">Mobile</th>&ndash;&gt;-->
        <!--&lt;!&ndash;<th scope="col">Seat Type</th>&ndash;&gt;-->
        <!--&lt;!&ndash;<th scope="col">Expect Seat Number</th>&ndash;&gt;-->
      <!--</tr>-->
      <!--</thead>-->
      <!--<tbody>-->

      <!--<tr v-for="(result, index) in resultList">-->
        <!--<td>-->
          <!--<CheckboxGroup v-model="selectedItem"-->
                         <!--size="large"-->
                         <!--style="height: 24px"-->
          <!--&gt;-->
            <!--<Checkbox :label="result.grabTicketInformationEntity.hash"-->
                      <!--size="large"-->

            <!--&gt;-->
              <!--<span></span>-->
            <!--</Checkbox>-->
          <!--</CheckboxGroup>-->
        <!--</td>-->

        <!--<td>{{ result.grabTicketInformationEntity.afterTime }}</td>-->
        <!--<td>{{ result.grabTicketInformationEntity.beforeTime }}</td>-->
        <!--<td>{{ result.grabTicketInformationEntity.trainDate }}</td>-->
        <!--<td>{{ result.grabTicketInformationEntity.fromStation }}</td>-->
        <!--<td>{{ result.grabTicketInformationEntity.toStation }}</td>-->
        <!--&lt;!&ndash;<td>{{ result.grabTicketInformationEntity.purposeCode }}</td>&ndash;&gt;-->
        <!--<td>{{ result.grabTicketInformationEntity.trainName }}</td>-->
        <!--&lt;!&ndash;<td>{{ result.grabTicketInformationEntity.backTrainDate }}</td>&ndash;&gt;-->
        <!--<td>{{ result.grabTicketInformationEntity.passengerName }}</td>-->
        <!--&lt;!&ndash;<td>{{ result.grabTicketInformationEntity.documentType }}</td>&ndash;&gt;-->
        <!--&lt;!&ndash;<td>{{ result.grabTicketInformationEntity.documentNumber }}</td>&ndash;&gt;-->
        <!--&lt;!&ndash;<td>{{ result.grabTicketInformationEntity.mobile }}</td>&ndash;&gt;-->
        <!--&lt;!&ndash;<td>{{ result.grabTicketInformationEntity.seatType }}</td>&ndash;&gt;-->
        <!--&lt;!&ndash;<td>{{ result.grabTicketInformationEntity.expectSeatNumber }}</td>&ndash;&gt;-->
      <!--</tr>-->


      <!--</tbody>-->
    <!--</table>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
      <!--name: "Delete",-->
      <!--data (){-->
        <!--return{-->

        <!--}-->
      <!--},-->
      <!--methods:{-->
        <!--queryByStatus(byStatus){-->
          <!--this.axios({-->
            <!--url: "/query/" + byStatus,-->
            <!--method: "get",-->
          <!--})-->
            <!--.then(response=>{-->
              <!--if (response.data.status){-->
                <!--// success-->
                <!--this.resultList = response.data.result;-->
              <!--}else{-->
                <!--// failed-->
                <!--this.$Modal.error({-->
                  <!--title: "Failed",-->
                  <!--content: response.data.message,-->
                  <!--okText: "OK",-->
                <!--});-->
              <!--}-->
            <!--})-->
            <!--.catch(error =>{-->
              <!--this.promptError();-->
            <!--})-->
            <!--.finally(()=>{-->
              <!--// this.loading = "visibility:hidden";-->
            <!--})-->
        <!--},-->
        <!--promptError() {-->
          <!--this.$Modal.error({-->
            <!--title: "Error",-->
            <!--content: "An error has occurred, please try again.",-->
            <!--okText: "OK",-->
          <!--})-->
        <!--},-->
      <!--},-->
      <!--created() {-->

      <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

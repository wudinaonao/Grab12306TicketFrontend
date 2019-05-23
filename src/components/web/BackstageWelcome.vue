<template>
  <div class="root-div">
    <i class="fas fa-train animated zoomIn bounce delay-1s index-color" style="font-size: 200px;"></i>
  </div>
</template>

<script>
  export default {
    name: "BackstageWelcome"
  }
</script>

<style scoped>
  .root-div{
    text-align: center;
    /*border: 1px red solid;*/

    /*background: orange;*/
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    /*margin: 0 auto;*/
  }


  .index-color{
    color: #405B55;
  }


</style>

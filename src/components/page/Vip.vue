<template>
  <div>
    <p>
      <span>Url:</span>
      <input v-model="newUrl" width="500">
    </p>
    <p>
      <!-- <iframe
        :src="newUrl"
        width="300"
        height="300"
        frameborder="0"
        id="newBrowser"
        scrolling="yes/no/auto"
      ></iframe>-->
      <object
        data="http://www.baidu.com"
        width="600"
        height="400"
        id="iframe1"
      >Error: Embedded data could not be displayed.</object>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newUrl: ""
    };
  },
  mounted: function() {
    let hi = document.body.clientHeight;
    let widt = document.body.clientWidth;
    document.getElementById("iframe1").style.height = hi + "px";
    document.getElementById("iframe1").style.width = widt + "px";
    try {
      var test = document.getElementById("iframe1")[0].innerHTML;
      alert(test);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
};
</script>

<style scoped>
</style>

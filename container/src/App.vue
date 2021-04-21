<template>
  <!-- <div id="root">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div id="subapp-viewport"></div>
  </div> -->
  <div id="layout-wrapper">
    <div class="layout-header">this is container</div>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
export default {
  name: "root-view",
  props: {
    loading: Boolean,
    content: String,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

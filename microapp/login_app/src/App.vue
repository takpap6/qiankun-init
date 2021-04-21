<template>
  <div id="app">
    <HelloWorld msg="this is login app" />
    <button @click="crwal">crwal</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import request from "superagent";
const agent = request.agent();
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    async crwal() {
      let result = await agent.get("/baidu");
      console.log(result.text);
    },
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

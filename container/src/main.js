import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

//////////////////////////////////////
// 导入qiankun内置函数
import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 第一个子应用装载完毕
  setDefaultMountApp, // 设置默认装载子应用
  start, // 启动
  initGlobalState
} from "qiankun";

// 初始化 state
const initialState = {
  user: {} // 用户信息
};

const actions = initGlobalState(initialState);
let state = ''
actions.onGlobalStateChange((mState, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(mState, prev);
  state = mState
});
actions.setGlobalState(state);
actions.offGlobalStateChange();


new Vue({
  render: h => h(App),
}).$mount('#app');

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}
// 注册子应用
registerMicroApps(
  [{
      name: "login_app",
      container: '#subapp-viewport', // 可为子应用分配不同的container，本次将不示例
      entry: "http://localhost:8081",
      activeRule: genActiveRule("/login")
    },
    {
      name: "home_app",
      container: '#subapp-viewport', // 可为子应用分配不同的container，本次将不示例
      entry: "http://localhost:8082",
      activeRule: genActiveRule("/home")
    },
  ], {
    beforeLoad: [
      app => {
        console.log("before load", app);
      }
    ], // 挂载前回调
    beforeMount: [
      app => {
        console.log("before mount", app);
      }
    ], // 挂载后回调
    afterUnmount: [
      app => {
        console.log("after unload", app);
      }
    ] // 卸载后回调
  }
)

// 设置默认子应用,参数与注册子应用时 genActiveRule("/aaa")函数内的参数一致
setDefaultMountApp("/login");

// 第一个子应用加载完毕回调
runAfterFirstMounted(() => {
  console.log('microapp loaded')
});

// 启动微服务
start();
/////////////////////////////////////
import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from './router';
// 注入mock数据
import './mock';

// 引入公共样式文件
import './style/index.less';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

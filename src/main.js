import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import plugin from './plugin'
import '@/components'

import '@/assets/styles/reset.css'
import '@/element'

import * as filters from './filters' // global filters
import * as directives from './directives' // global directives
// require lib
import VueCodemirror from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'

// require more codemirror resource...

// you can set default global options and events when use
Vue.use(VueCodemirror)
// import '@/components' // 导入全局组件
Vue.use(plugin)
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Object.keys(directives).forEach(key => Vue.directive(key, directives[key]))
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

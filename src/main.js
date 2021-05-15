import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/*firestore */
// import { firestorePlugin } from 'vuefire'
/*Real Time Database */
import { rtdbPlugin } from 'vuefire'

// Vue.use(firestorePlugin)
Vue.use(rtdbPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')

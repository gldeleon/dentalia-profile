import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import Axios from "axios";
// import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/global-css/adminlte.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


Vue.use(VueSweetalert2);
Vue.use(VueSession)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
// Vue.prototype.$url = "http://localhost:9001/api/";
// Vue.prototype.$url = "http://apiperfiles.dentalia.com.mx/api/";
Vue.prototype.$url = process.env.VUE_APP_API_URL;

const firebaseConfig = {
  apiKey: "AIzaSyAvcralV2a86SmVTu3QLyhMf65_JhUvnQo",
  authDomain: "mis-pwa.firebaseapp.com",
  databaseURL: "https://mis-pwa.firebaseio.com",
  projectId: "mis-pwa",
  storageBucket: "mis-pwa.appspot.com",
  messagingSenderId: "262062419750",
  appId: "1:262062419750:web:42b8088c5c2ca19ac31be7",
  measurementId: "G-F0KX8TPQ2H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

new Vue({
  router,
  store,
  analytics,
  render: h => h(App)
}).$mount('#app')

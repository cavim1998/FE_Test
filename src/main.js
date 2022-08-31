import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faUserSecret);
library.add(fas);
library.add(fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import "devextreme/dist/css/dx.light.css";

import { alert, confirm, custom } from "devextreme/ui/dialog";

Vue.prototype.$dxDialogAlert = alert;
Vue.prototype.$dxDialogConfirm = confirm;
Vue.prototype.$dxDialogCustom = custom;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

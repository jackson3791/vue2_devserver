import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import { Service } from "@/http/Service";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.prototype.$axios = Service;
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");

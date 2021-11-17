import App from "./App.js";
import store from "../store/index.js";
import router from "../views/router.js";
import { init } from "../store/API/index.js";

init()
new Vue({
  el: "#app",
 router, store,
    render: h => h(App)
});

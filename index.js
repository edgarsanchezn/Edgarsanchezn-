import App from "./components/App.js";
import store from "./store/index.js";
import router from "./views/router.js";


new Vue({
  el: "#app",
  router, store,
    render: h => h(App)
});

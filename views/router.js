import Admin from "./Admin.js";
import Analytics from "./Analytics.js";
import Tasks from "./Tasks.js";
import Messages from "./Messages.js";
import Payments from "./Payments.js";
import Users from "./Users.js";

let prefijo = "/system.html"

const routes = [
  { path: prefijo + "/tasks", component: Tasks },
  { path: prefijo + "/users", component: Users },
  { path: prefijo + "/Messages", component: Messages },
  { path: prefijo + "/payments", component: Payments },
  { path: prefijo + "/analytics", component: Analytics },
  { path: prefijo + "/Admin", component: Admin },

  { path: prefijo , component: Analytics },
];

export default new VueRouter({
  mode: "history",
  routes,
});

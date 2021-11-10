import tblTasks from "./tables/tblTasks.js";
import tblUsers from "./tables/tblUsers.js";

var connection = new JsStore.Connection();

var db = {
  name: "ServidorLocal",
  tables: [tblTasks, tblUsers],
};

async function init(){
let isDbCreated = await connection.initDb(db);
}
export default init
export {connection, init}

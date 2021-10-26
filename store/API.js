var connection = new JsStore.Connection();

// step1 - create database schema
var tblProduct = {
  name: "Product",
  columns: {
    // Here "Id" is name of column
    Id: { primaryKey: true, autoIncrement: true },
    ItemName: { notNull: true, dataType: "string" },
    Price: { notNull: true, dataType: "number" },
    Quantity: { notNull: true, dataType: "number" },
  },
};

var tblOrder = {
  name: "Order",
  columns: {
    // Here "OrderId" is name of column
    OrderId: { primaryKey: true, autoIncrement: true },
  },
};

var db = {
  name: "ServidorLocal",
  tables: [tblProduct, tblOrder],
};

async function init() {
  let isDbCreated = await connection.initDb(db);

  let text = isDbCreated ? "Db Created & " : "";

  console.log(text + "Connection is opened");
}

async function select(table,){
    return await connection.select({
        from: table
       
    });
    
}

async function insert(table, Value= {}){
    return await connection.insert({
        into: table,
        values: [Value], //you can insert multiple values at a time
    });
}

init();

//console.log(Users)
export { init, select };

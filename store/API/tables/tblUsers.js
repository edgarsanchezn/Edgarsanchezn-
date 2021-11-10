export default {
    name: "Users",
    columns: {
      Id: { primaryKey: true, autoIncrement: true },
      FirstName: { notNull: true, dataType: "string" },
      LastName: { notNull: true, dataType: "string" },
      Email: { notNull: true, dataType: "string" },
      Company: { notNull: true, dataType: "string" },      
      Status: { notNull: true, dataType: "boolean" },
      Deleted: { notNull: true, dataType: "boolean" },
    },
  };
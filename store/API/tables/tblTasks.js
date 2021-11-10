export default {
    name: "Tasks",
    columns: {
      Id: { primaryKey: true, autoIncrement: true },
      Name: { notNull: true, dataType: "string" },
      Description: { notNull: true, dataType: "string" },
      Status: { notNull: true, dataType: "boolean" },
      Deleted: { notNull: true, dataType: "boolean" },
    },
  };
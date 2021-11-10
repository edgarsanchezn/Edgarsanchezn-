export default {
  name: "Orders",
  columns: {
    OrderId: { primaryKey: true, autoIncrement: true },
    ItemName: { notNull: true, dataType: "string" },
  },
};
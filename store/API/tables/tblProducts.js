export default {
  name: "Products",
  columns: {
    Id: { primaryKey: true, autoIncrement: true },
    ItemName: { notNull: true, dataType: "string" },
    Price: { notNull: true, dataType: "number" },
    Quantity: { notNull: true, dataType: "number" },
  },
};

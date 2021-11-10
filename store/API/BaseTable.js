import { connection } from "./index.js";

export default class BaseTable{
    constructor(table) {
        this.connection = connection
        this.table = table
    }

    async create(newData){
        var noOfRowsInserted = await this.connection.insert({
            into: this.table,
            values: [{...newData, Status: false, Deleted: false}],
        });
        if (noOfRowsInserted > 0) {
            console.log('Successfully Added in ' + this.table);
        }
    }

    async read(){
        return await this.connection.select({ from: this.table });
    }

    async update(data){
        var noOfRows = await this.connection.update({ 
            in: this.table,
            set: { ...data  },
            where: { Id: data.Id }
        });
    console.log(noOfRows + ' rows updated');
    }

     async delete(Id){
        var noOfRows = await this.connection.update({ 
            in: this.table,
            set: { Deleted: true },
            where: { Id: Id }
        });
    console.log(noOfRows);
     }



}
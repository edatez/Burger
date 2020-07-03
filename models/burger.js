var orm = require("../config/orm.js");

const burger = {
    all (columns, cb) {
        orm.selectAll(columns, "burgers", cb);
    },
 
    create (data, cb) {
        orm.insertOne ( "burgers", data, cb );
    },
    
    update (newValues, targetId, cb) {
        console.log("update")
        orm.updateOne ( "burgers", newValues, targetId, cb );
    }
}; 


module.exports = burger;
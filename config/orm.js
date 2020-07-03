const connection = require("./connection.js");

const orm = {
    selectAll (columns, tableName, cb) {
        // SELECT from burgers
        // SELECT columns FROM tableName;
        connection.query ("SELECT ?? FROM ??", [columns, tableName], (err, results) => {
            if (err) throw err;
            cb (results);
        });   
    },

    insertOne (tableName, values, cb) {
        // INSERT INTO tableName SET values;
        connection.query ("INSERT INTO ?? SET ?", [tableName, values], (err, results) => {
            if (err) throw err;
            cb (results);
        });   
    },
    
    updateOne (tableName, newValues, targetId, cb ) {
        // UPDATE tableName SET NEW value WHERE id = targetId;
        console.log("orm", targetId)    // {id:"5"}  "updata  Burgers SET devoured =1 WHERE id = 5}]  "
        connection.query ("UPDATE ?? SET devoured =  1 WHERE id =?", [tableName, targetId.id, cb], (err, results) => {
            if (err) throw err;
            console.log(results);
            cb (results );
            });
    }
};
module.exports = orm;















module.exports = orm;
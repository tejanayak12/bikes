const { error } = require("console");
const sqlite = require("sqlite3");

const db = new sqlite.Database("./bikes.db",

    sqlite.OPEN_READWRITE,
    (error) =>{
        if(error) {
            console.log("db was not connected....."),
            console.log(error  , error)
        }else{
            console.log("db was connected.........")
        }
    }

);

module.exports = db;

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

/*const sql = require("mysql");
const connection = sql.createConnection({
    host : "localhost",
    user : "dbuser",
    password : "teja@1234",
    database : "bikes.db"
});

connection.connect();

connection.query("SELECT * FROM bikes" , (err , rows) => {
    if(err) throw err
    console.log("the bikes was : " , rows[0].bikes)
});
connection.end()*/

const sqlite = require("sqlite3");
const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());

const port = 3000;

const { getallbikes, getbike_id } = require("./bikes-data/READ.js");
const insert_bikes = require("./bikes-data/CREATE.js")
const update_bikes = require("./bikes-data/UPDATE.js");
const delete_bikes = require("./bikes-data/DELETE");

app.get("/bikes", getallbikes);
app.get("/bikes/:id", getbike_id);
app.post("/new-bike", insert_bikes);
app.put("/bikes/:id", update_bikes);
app.delete("/bikes/:id", delete_bikes);

app.get("/", (request, response) => {
    response.json({
        status_of_server: "Running success",
        developed_by: "TEJA NAYAK.........."
    })
})

app.listen(port, () => {
    console.log("server was running..........")
});
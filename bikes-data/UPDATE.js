const { error } = require("console");
const { response } = require("express");
const { request } = require("http");
const db = require("../db.js");

const update_bikes = (request , response) => {
    const bike_id = request.params.id;
    const requestbody = request.body;
    const price = requestbody.price;
    const sql = `update bikes set price = ${price} where id = ${bike_id}`;
    db.serialize(() => {
        db.exec(sql , (error) => {
            if(error){
                response.status(404).json({
                    status : false,
                    error : error
                })
            }else {
                response.json({
                    status : true,
                    message : "price was updated............"
                })
            }
        })
    })
};

module.exports = update_bikes;
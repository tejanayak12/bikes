const { error } = require("console");
const { response } = require("express");
const { request } = require("http");
const db = require("../db.js");

const sql_query = "SELECT * FROM bikes";

const getallbikes = (request,response) => {
    db.serialize(() => {
        db.all(sql_query , (error , bikes) => {
            if (error) {
                response.json({
                    status :  false,
                    error : error
                })
            }else {
                response.json({
                    status : true,
                    Bikes : bikes
                })
            }
        })
    })
};


// getting bikes list by id....

const getbike_id = (request , response) => {
    const id = request.params.id;
    const SQL = `SELECT * FROM bikes WHERE id = ${id}`;
    db.serialize(() => {
        db.get(SQL , (error , rows) => {
            if (error || !rows){
                response.status(404).json({
                    status : false,
                    message : `couldn't find bikes id on ${id}`
                })
            } else {
                response.json({
                    status : true,
                     id : rows
                })
            }
        })
    }) 
};

module.exports = {getallbikes,getbike_id};
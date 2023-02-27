const { error } = require("console");
const { response } = require("express");
const { request } = require("http");
const db = require("../db.js");

const insert_bikes = (request, response) => {
    const bike_data = request.body;
    const {name , colour , engine , price , location} = bike_data;

    if(!name){
        return("please enter name of a bike....")
    }
    if(!colour){
        return ("please prive colour of an bike....")
    }
    if(!engine){
        return ("please provide engine cc ")
    }
    if(!price){
        return ("please provide price of an bike.....")
    }
    if(!location){
        return ("please provide the location of a bike......")
    }

    const sql = `INSERT INTO bikes (
        name,
        colour,
        engine,
        price,
        location
    ) VALUES (
        "${name}",
        "${colour}",
        "${engine}",
        "${price}",
        "${location}"
    )`
        db.serialize(() => {
            db.exec(sql , (error) => {
                if(error){
                    response.status(404).json({
                        status : false,
                        error : error
                    })
                }else{
                    response.json({
                        status : true,
                        message : "new bike data was added........."
                    })
                
                    
                }
            })
        })
    
};

module.exports = insert_bikes;
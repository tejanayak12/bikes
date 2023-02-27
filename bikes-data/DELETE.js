const { error } = require("console");
const db = require ("../db.js");

const delete_bikes = (request,response) => {
    const bike_id = request.params.id;
    const sql = `DELETE FROM bikes WHERE id = ${bike_id}`

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
                    message : `${bike_id} was deleted...........`
                })
                

                
            }
        })
    })
};

module.exports = delete_bikes;
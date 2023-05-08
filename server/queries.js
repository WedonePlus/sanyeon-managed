const mysql = require('mysql');


const pool = mysql.createPool(require('./config/dbConfig.js'));

const getSectorList = (req, response) => {
    const sql = 'select * from sectors';
    try {
        pool.getConnection((err, con) => {
            console.log("connection_pool GET");
            if(err) throw err;
            con.query(sql, (err, res, fields) => {
                if(err) {
                    console.error("connection_pool GET Error / "+err);
                    response.status(500).send("message : Internal Server Error");
                }else {
                    if(res.length === 0){
                        response.status(400).send({
                            success : false,
                            message : "DB response Not Found"
                        });
                    }
                    else{
                        response.status(200).send({
                            success : true,
                            res
                        });
                    }
                }
            })
        })   
    } catch (err) {
        console.error("connection_pool GET Error / "+err);
        response.status(500).send("message : Internal Server Error");
    }
}

module.exports = {
    getSectorList
}
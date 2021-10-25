let mysql = require('mysql');
let connection = mysql.createConnection({
    host: "locahost",
    user: "rooot",
    password: "",
    database: "make"
}) 

connection.connect((error)=>{
    if(!!error){
        console.log(error);
    }else{
        console.log('Connected...');
    }
})

module.exports = connection
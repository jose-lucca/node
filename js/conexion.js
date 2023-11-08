let mysql = require("mysql");


let conexion = mysql.createConnection({
    host: "localhost",
    database: "ofiju",
    user: "root",
    password: ""
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else {
        console.log ("Conexion Exitosa");
    }
});




const general = "SELECT * FROM general";


conexion.query(general, function(error, lista){
    if(error){
        throw error;
    }else {
        console.log(lista[0].expediente);
        var numeroexpediente = lista[0].expediente
        conexion.end();

    }
});

const inputExpediente = document.getSelection(".numeroExpediente");
console.log (inputExpediente);
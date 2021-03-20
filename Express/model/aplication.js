const mongoose = require("mongoose");
//const express = require("express");
//const app = express();

mongoose.connect("mongodb://localhost:27017/Edureka", { useNewUrlParser: true } , (error)=>{
    if(!error)
        {
            console.log("Sucesso");
        }
    else
        {
            console.log("Error de de Conexao")
        }    
});

const Curso = require("./curso.model");

//app.get("/test", function(req, res){
  //  res.send("Olaaaaa MUndoooo");
//});

//app.listen(3000);


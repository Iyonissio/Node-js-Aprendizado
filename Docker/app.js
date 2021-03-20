const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Docker Aprendizado")
});

app.listen(3000, function(){
    console.log("App listening on Porta 3000")
});
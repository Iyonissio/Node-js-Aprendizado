const http = require("http");
const express = require("express");
const app =  express();


app.get("/", function(req, res) {
    res.send("<h1>Servidor<h1>");
});

http.createServer(app).listen(3001, () => 
console.log("Servidor rodando Localmente Porta 3001"));

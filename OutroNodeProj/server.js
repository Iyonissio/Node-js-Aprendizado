const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send('Hello world');
});

app.post("/", (req, res)=>{
    res.send("POST - Hello Edureca");
})

app.get("/pessoas", (req, res)=>{
    res.send('Pessoas');
});

app.get("/productos", (req, res)=>{
    res.send('produtos');
});

app.listen("8080", ()=>{
    console.log("Servidor Iniciado")
});
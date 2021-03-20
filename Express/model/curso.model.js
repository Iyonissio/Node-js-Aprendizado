const mongoose = require("mongoose");

var CursoSchema = new mongoose.Schema({
    cursoNome : {
        type : String,
        required : "Required"
    },
    cursoId : {
        type : String
    },
    cursoDuracao : {
        type : String
    },
    cursoFee : {
        type : String
    }
});

mongoose.model("Curso", CursoSchema)
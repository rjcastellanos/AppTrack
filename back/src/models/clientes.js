const {model, Schema} = require('mongoose');

const schema = new Schema({
    "nombre_usuario": "string",
    "contrasenia": "string",
    "nombre": "string",
    "apellido": "string",
    "imagen": "string"
});

const cliente = model("clientes",schema);

module.exports = cliente;
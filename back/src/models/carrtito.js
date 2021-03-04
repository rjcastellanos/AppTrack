const {model, Schema} = require('mongoose');

const schema = new Schema({
    "id_cliente": "string",
    "descripcion_prod": "string",
    "cantidad": "number",
    "subtotal": "decimal", 
});

const carrito = model("carrito", schema);

module.exports = carrito;
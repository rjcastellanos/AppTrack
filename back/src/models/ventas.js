const {model, Schema} = require('mongoose');

 const schema = new Schema({
    "descripcion_prod": "string",
    "cantidad": "number",
    "subtotal": "double",
    "id_cliente": "string"
 });

 const ventas = model("ventas",schema);

 module.exports = ventas;
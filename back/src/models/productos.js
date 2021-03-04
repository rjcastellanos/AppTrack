const {model, Schema} = require('mongoose');

const schema = new Schema({
    "descripcion": "string",
    "imagen": "string",
    "precio": "decimal",
    "enExistencia": "boolean"
});

schema.method.setImgUrl = function setImgUrl(filename){
    this.imagen = 'http://192.168.1.74:4500/public/' + filename;
}

const prod = model("productos",schema);

module.exports = prod;
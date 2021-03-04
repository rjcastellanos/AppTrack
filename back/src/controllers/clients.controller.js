const clients = {};

const clientModel = require('../models/clientes');

clients.getAll = async (req, res) => {
    const r = await clientModel.find();
    res.json(r);
} 
clients.add = async (req, res) => {
    const cli = req.body;
    const client = new clientModel({
        "nombre_usuario": cli.nombre_usuario,
        "contrasenia": cli.contrasenia,
        "nombre": cli.nombre,
        "apellido": cli.apellido,
        "imagen": cli.imagen
    });
    const r = await client.save();
    if(r){
        res.json({Message: "Usuario agregado"})
    }else {
        res.json({Message: "ERROR"})
    }
} 
clients.edit = async (req, res) => {
    const cli = req.body;
    const id = req.params.id;
    const r = await clientModel.findByIdAndUpdate(id, {
        "nombre_usuario": cli.nombre_usuario,
        "contrasenia": cli.contrasenia,
        "imagen": cli.imagen
    });
    if(r){
        res.json({Message: "Usuario Actualizado"})
    }else{
        res.json({Message: "Ocurrio un error"})
    }
}
clients.login = async (req, res) => {
    const {nombre_usuario, contrasenia} = req.body;
    const r = clientModel.findOne({nombre_usuario, contrasenia});
    if(r){
        res.json({Message: "Usuario encontrado"})
    }else{
        res.json({Message: "No hay resultados"})
    }
}
module.exports = clients;
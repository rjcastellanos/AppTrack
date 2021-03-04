const carrito = {}
const carritoModel = require('../models/carrtito');

carrito.get = async(req, res)=> {
    const {id_cliente} = req.body;
    const r = carritoModel.findOne({ id_cliente })
    if(r){
        res.json({Message: "Encontrado"})
    }else{
        res.json({Message: "No hay elementos en el carrito"})
    }
}

carrito.add = async (req, res) => {
    const data = req.body;
    const carritonuevo = new carritoModel({
        "id_cliente": data.id_cliente,
        "descripcion_prod": data.descripcion_prod,
        "cantidad": data.cantidad,
        "subtotal": data.subtotal, 
    })
    const r = await carritonuevo.save();
    if(r){
        res.json({Message: "Agregado al carrito"})
    }else{
        res.json({Message: "Fallo al agregar al carrito"})
    }
}

carrito.edit = async (req, res) => {

}

carrito.del = async(req, res) => {
    const id = req.params.id;
    const respuesta = carritoModel.findByIdAndDelete(id)
    if(respuesta){
        res.json({Message: "Producto eliminado del carrito"})
    }else{
        res.json({Mess: "Error al eliminar del carrito"})
    }
}

carrito.delAll = async(req, res) => {
    const {id_cliente} = req.body;
    const respuesta = carritoModel.findOneAndDelete({
        "id_cliente": id_cliente
    })
    if(respuesta){
        res.json({Message: "Productos eliminados del carrito"})
    }else{
        res.json({Message: "Fallo al eliminar"})
    }
}

module.exports = carrito;
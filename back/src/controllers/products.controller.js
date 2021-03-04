const prodcontrollers = {};
const productsModel = require('../models/productos');

prodcontrollers.getAll = async (req, res) => {
    const r = await productsModel.find();
    res.json(r);
}

prodcontrollers.add = async (req, res) => {
  if(req.file){
    const {filename} = req.file; 
    const prod = req.body;
    let newProduct = new productsModel({
        "descripcion": prod.descripcion,
        "precio": prod.precio,
        "enExistencia": prod.enExistencia
    });

    newProduct.setImgUrl(filename)
    const respuesta = await newProduct.save();
    if(respuesta){
        res.json(req.body)
    }else{
        res.json({Message: "error"})
    }
  }
  else{
      res.send(req.body)
  }
}

prodcontrollers.edit = async (req, res) => {
    const prod = req.body;
    const id = req.params.id;
    const r = await productsModel.findByIdAndUpdate(id, {
        "descripcion": prod.descripcion,
        "imagen": prod.imagen,
        "precio": prod.precio,
        "enExistencia": prod.enExistencia
    });
    if(r){
        res.json({Message: "Producto Actualizado"})
    }else{
        res.json({Message: "Ocurrio un error"})
    }
}

prodcontrollers.del = async (req, res) => {   
    const r = await productsModel.findByIdAndDelete(req.params.id);
    if(r){
        res.json({Message: "Producto eliminado"});
    }else{
        res.json({Message: "Error al eliminar"})
    }
}
module.exports = prodcontrollers;
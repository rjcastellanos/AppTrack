const {Router} = require('express');
const carritoController = require('../controllers/carrito.controller');
const carrito = require('../models/carrtito');
const router = Router();

router.route('/')
    .get(carritoController.get)
    .post(carritoController.add)
    .delete(carritoController.delAll)

router.route('/del/:id')
    .delete(carritoController.del)

module.exports = router;
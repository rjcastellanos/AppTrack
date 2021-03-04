const {Router} = require('express');

const upload = require('../libs/storage');
const router = Router();
const prodController = require('../controllers/products.controller');

router.route('/')
    .get(prodController.getAll)
    .post(upload.single('imagen'),prodController.add)
    
router.route('/:id')
    .delete(prodController.del)
    .put(prodController.edit)


module.exports = router;

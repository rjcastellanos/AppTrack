const {Router} = require('express');

const router = Router();
const clientController = require('../controllers/clients.controller');

router.route('/')
    .get(clientController.getAll)
    .post(clientController.add)
    
router.route('/:id')
    .put(clientController.edit);

router.route('/login')
    .get(clientController.login)
module.exports = router;
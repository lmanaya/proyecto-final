//Express
const router = require('express').Router();
// Ruta del controlador
const usuarioController = require('../../controllers/usuarioController.js');
//Ruta del middlewaer
const auth = require('../../middlewares/auth');

router.post('/login', usuarioController.login); // .com/api/usuario/login
router.post('/add', auth.verificarAdministrador, usuarioController.add);// .com/api/usuario/add
router.get('/list', auth.verificarAdministrador, usuarioController.list);// .com/api/usuario/list
router.put('/update', auth.verificarAdministrador, usuarioController.update);// .com/api/usuario/update
router.put('/activate', auth.verificarAdministrador, usuarioController.activate);// .com/api/usuario/activate
router.put('/deactivate', auth.verificarAdministrador, usuarioController.deactivate);// .com/api/usuario/deactivate

// Exportar el router
module.exports = router;
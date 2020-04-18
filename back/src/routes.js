const express = require('express');

// acesso a pasta controller e ao preferencesController para persistencia 
const PreferencesController = require('./controllers/PreferencesController');

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log(req.connection.remoteAddress)
    // usando get e retorno de json para status de conexao remota
    return res.json({ data: 'Init Service', code: 200, status: true }).status(200)
})
// metodo get para exportarmos index e mostrar parametros 
routes.get('/preferences', PreferencesController.index)
routes.post('/preferences/store', PreferencesController.create)
routes.get('/preferences/:param', PreferencesController.show)

module.exports = routes;
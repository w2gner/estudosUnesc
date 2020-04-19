const routes = require('express').Router();
const alunoController = require('./controller/alunoController');
const cursoController = require('./controller/cursoController');

routes.get('/aluno', alunoController.findAll);
routes.post('/aluno', alunoController.criarUsuario);

routes.get('/curso', cursoController.findAll);
routes.post('/curso', cursoController.criarCurso);

module.exports = routes;

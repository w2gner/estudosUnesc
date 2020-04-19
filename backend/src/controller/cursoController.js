const sql = require('../database/index');

module.exports = {
    async criarCurso(req, res) {
        const { name, cod } = req.body;
        const resposta = await sql('curso').insert({
            name,
            cod,
        });
        console.log(resposta);
        return res.send('Deu');
    },
    async findAll(req, res) {},
};

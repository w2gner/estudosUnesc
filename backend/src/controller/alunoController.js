const sql = require('../database/index');

module.exports = {
    async criarUsuario(req, res) {
        const { name, matricula, email, phone, password, id_curso } = req.body;
        const resposta = await sql('aluno').insert({
            name,
            matricula,
            email,
            phone,
            password,
            id_curso,
        });
        console.log(resposta);
        return res.send('Deu');
    },
    async findAll(req, res) {},
};

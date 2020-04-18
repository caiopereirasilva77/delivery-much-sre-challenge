//acessando arquivo de conexao
const connection = require('../database/connection');

module.exports = {
    async index (req, res) {
        const preferences = await connection('preferences').select('*');
        return res.json(preferences).status(200);
    },
    // funcao assincrona para insercao dos atributos id, ip e preference na entidade preferences
    async create (req, res) {
        const { ip, preference }  = req.body;
        const [id] = await connection('preferences').toString();
        const response = await connection('preferences').insert({
            id,
            ip,
            preference
        })
        return res.json(response[0]).status(201);
    },
    //funcao assincrona passando request e response
    //atribuicao de conexao a entidade preferences retornando id
    async show (req, res) {
        const { param } = req.params
        const response = await connection('preferences').select('*').where('id', param)
 //retorno de json passando por parametro array na posicao 0
        return res.json(response[0]).status(200)
    }
};
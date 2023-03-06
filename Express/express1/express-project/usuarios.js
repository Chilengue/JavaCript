const Sequelize = require('sequelize')
const sequelize= new Sequelize('Cadastro', 'root', '',
{
    host: "127.0.01",
    dialect: 'mysql'
})

// sequelize.authenticate().then(function()
// {
//     console.log("conectada com sucesso")
// }).catch(function(erro)
// {
//     console.log("falha ao se conectar" +erro);
    
// })

//Usuarios conectados com sucesso

const Postagem= sequelize.define(
'postagens',
{
    titulo:{
        type: Sequelize.STRING
    },
    contedo:
    {
        type: Sequelize.TEXT
    }
})
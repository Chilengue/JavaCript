// const Sequelize = require('sequelize')
// const sequelize= new Sequelize('test', 'root', '',
// {
//     host: "127.0.01",
//     dialect: 'mysql'
// })


// sequelize.authenticate().then(function()
// {
//     console.log("conectada com sucesso")
// }).catch(function(erro)
// {
//     console.log("falha ao se conectar" +erro);
    
// })

// Usuarios conectados com sucesso

// const Postagem= sequelize.define(
// 'postagens',
// {
//     titulo:{
//         type: Sequelize.STRING
//     },
//     contedo:
//     {
//         type: Sequelize.TEXT
//     }

// })

// Postagem.create(
//     {
//         titulo: "Ola jose Orlando ",
//         contedo:  " Ola este  e um pequeno registo de dados no banco de dados usando Node js"
//     })

// const Turma= sequelize.define(
// 'turmas',
// {
//     numero_aluno:{
//         type: Sequelize.STRING
//     },
//     Horario:
//     {
//         type: Sequelize.TIME
//     },
//         Classe:
//     {
//         type: Sequelize.TEXT
//     }

// })
// Turma.create(
//     {
//         numero_aluno: "2019121015",
//         Horario: "12:30",
//         Classe: "12 Classe"
//     }
// )

// const Usuarios=sequelize.define('usuarios',
// {
//     nome:{
//         type: Sequelize.STRING,
//     },
//     sobrenome:
//     {
//         type:Sequelize.STRING,
//     },
//     idade:
//     {
//         type: Sequelize.INTEGER
//     },
//     email:
//     {    
//         type: Sequelize.STRING
//     }
// })
// Usuarios.create(
//     {
//         nome: "Jose Orlando Chilengue",
//         sobrenome:"Chilengue",
//         idade: "24",
//         email: "chilenguejoseorlano@gmail.com"
//     }
// )

// Usuarios.sync({force:true})
// // Postagem.sync({force:true})
// Turma.sync({force:true})
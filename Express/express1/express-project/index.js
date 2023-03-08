const express= require("express");
const app= express();
const handlebars= require('express-handlebars');
const Sequelize = require('sequelize')
//Config
//Template Engine
 app.engine('handlebars', handlebars({defaultLayout: 'main'}))
 app.set ('view engine', 'handlebars')


//CONEXAO COM O BANCO DE DADOS MYSQL
const sequelize= new Sequelize('test', 'root', '',
{
    host: "127.0.01",
    dialect: 'mysql'
})
  
//Rotas
app.get('/cad', function(req, res)
{
  res.render('formulario')
})
//servidor loodg
app.listen(9097, function()
{
    console.log("servidor Rodando na url http://localhost:9097");
    
});


const express= require("express");
const app= express();

app.get("/", function(req, res)
{
    res.sendFile(__dirname+"/html/index.html");
});

// app.get("/", function(res, req)
// {
//     res.send("seja bem vindo ao meu app");
// });  routas estaticas

  app.get("/sobre", function(req, res)
{
        res.sendFile(__dirname+"/html/sobre.html");
});

   app.get("/blog", function(req, res)
{
        res.sendFile(__dirname+"/html/blog.html");
});

  app.get('/ola/:nome/:cargo', function(req, res)
{
     res.send("<h1>ola: "+req.params.nome +"</h1>" +"<h1>seu cargo favorito: "+req.params.cargo +"</h1>"  );
});

// app.get('/ola:nome/:cargo', function()
// {
//     res.send("ola");
// }); Parametros 
















app.listen(9097, function()
{
    console.log("servidor Rodando na url http://localhost:9097");
    
});


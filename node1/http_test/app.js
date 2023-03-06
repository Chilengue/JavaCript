var http= require ('http');

http.createServer(function(req, res){
    res.end("Ola");
}).listen(9091);

console.log( "O servidoe Rodando");
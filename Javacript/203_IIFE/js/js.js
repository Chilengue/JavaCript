
// IIFE immediately invoke function Ecpression
//IIFE expressao de funcap imediata invpcada

(
function () {
  const meuNome= "jose";
  
}
)()
meuNome // esta variavel nao acessada 

// so encontramos assim
const resultado = (function () {
  const meuNome="Ronas";
  
})()
console.log(resultado);
    ///  Expressao de chamadas no js
    //tudo que esta dentr de IIFe nao acesso de fora 
    //
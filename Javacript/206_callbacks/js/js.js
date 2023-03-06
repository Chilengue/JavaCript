const { useCallback } = require("react");

const Saudacao= (nome) =>alert("Ola" + nome);
const processaEntradaUsuario = (callback) =>
{
  const nome = prompt ("Digtw seu nome");
  callback (nome);
}
processaEntradaUsuario(nome)


//outro callback

const callback= e => alert ("Aconteceu em envento" + e.type);
window.addEventListener('click', callback)

///outro callback

const somar=(x,y) => x+y;

const calcular1=(x,y, computar) => computar(x, y);
const resultado= calcular1(20, 30, somar);
console.log(resultado);

//outra callback

const arr=[1,2,3];
const newArr= arr.map(x=> x+x);
console.log(newArr);

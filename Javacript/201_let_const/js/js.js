var minhaVar= "JOse";
console.log(minhaVar);
//esta declaracao var so limita a uma funcao e programacao

if (true) {
  var exposta= "exposta";
  let noExposta= "NaoExposta";
}
console.log(exposta);

//outras variaveis em javacript

for (let i = 0; i < 10; i++) {
  var j=i;
}
console.log(j);

///tambem nao podemos retrubuir uma constante 

const variavei=10;
variavei=30;

//manteer imutalidade de um arry na programacao
const arr =[1,2,3];
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);


///objectos em javacript
const obj= {a:1, b:2};
obj.c=3
delete obj.c;
console.log(obj);



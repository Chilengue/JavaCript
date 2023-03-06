const minhaF= function()
{
  console.log("Alguma coisa");
  
}
function minhaF ()
{
}
//estas duas funcoes irao dar erro porque nao se da nome de uma funcao igual a nome de uma vairavel

const funcap= ()=> "Uma escla de funcoes";
funcap();


//global 
const thisGlobal=()=>
{
  console.log(this );
  
}
thisGlobal();

///this local no js

const obj=
{
  thislocal: function()
  {
    const thislocal= (() => console.log(this) )()
  }
}
obj.thislocal();
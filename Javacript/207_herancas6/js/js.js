class Dev
{
  constructor(nome, idade, Prilinguagem)
  {
    this.nome=nome;
    this.idade=idade;
    this.Prilinguagem=Prilinguagem;
  }
  saudacao()
  {
    console.log('oi sou dev Frontand, trabalho com  ${this.Prilinguagem} e me chamo
    ${this.nome} \n\n');
  }
}

class Frontand extends Dev
{
  constructor(nome, idade, Prilinguagem, framework)
  {
    this.nome=nome;
    this.idade=idade;
    this.Prilinguagem=Prilinguagem;
    this.framework=framework;
  }
  saudacao()
  {
    console.log('oi sou dev Frontand, trabalho com' +  ${this.Prilinguagem} +'e me chamo'+
    ${this.nome} +'\n\n');
  }
}

class Backend extends Dev
{
  constructor(nome, idade, Prilinguagem, BancoDeDados)
  {
    this.nome=nome;
    this.idade=idade;
    this.Prilinguagem=Prilinguagem;
    this.BancoDeDados=BancoDeDados;
  }
  saudacao()
  {
    console.log('oi sou dev Frontand, trabalho com' +  ${this.Prilinguagem} +'e me chamo'+
    ${this.nome} +'\n\n');
  }
}

const dev = new Dev("Pedro", 25, "php");
console.log(dev);
dev.saudacao();

const front1= new Frontand("jose", "34", "tycript", "react");
const back = new Backend("jose ", "23", "Sql Server");

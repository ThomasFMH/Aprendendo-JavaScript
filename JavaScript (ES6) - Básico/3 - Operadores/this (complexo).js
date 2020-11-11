//EXEMPLO 1 - chamada de variavel 
let nome = 'João'

function dizerFrase() {
  console.log(`${nome} está correndo para pegar o trem!`)
}

dizerFrase() // "João" está correndo para pegar o trem!

//EXEMPLO 2 - Usando (this.) para referenciar o que está dentro do escopo do codígo
//Objeto (pedro)
let pedro = {
  nome: 'Pedro',
  dizerFrase: function () {
    console.log(`${this.nome} está correndo para pegar o trem!`)
  }
}

pedro.dizerFrase() // Pedro está correndo para pegar o trem!
console.log(typeof(pedro))
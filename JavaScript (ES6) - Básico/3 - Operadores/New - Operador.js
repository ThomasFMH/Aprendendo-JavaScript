// lINK -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

/*Importante: Instanciar uma classe significa criar um novo objeto daquela classe, 
ou seja: objeto é o conjunto de atributos e métodos da classe.*/

/*Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto.
 No JS utilizamos um função para criar uma classe.*/

function Pessoa(nome, sobrenome) {
// retorna um Objeto se for chamdo parametro (new)
    this.nome = nome
    this.sobrenome = sobrenome
    
    // this.nomeCompleto = function () {
    //     return this.nome + ' ' + this.sobrenome
    // }
}

/* Utilizando (.prototype) é possivel que a cada nova instancia utilizando o operador 
(new) não seja criada uma nova função, assim poupando memoria do sistema.*/
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
}

// O resultado da função pessoa fica em (var joao)
var joao = Pessoa() // Output: Undefined
 
// Sempre que utilizar o operador (new) a função chamada será uma função construtora,
// e será criado um novo objeto.
var maria = new Pessoa('Maria', 'dos Santos') // Output: Pessoa {} (Obs: Recebe um objeto vazio.)

console.log(joao)
// console.log(maria)
console.log(maria.nomeCompleto())



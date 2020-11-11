//ARROW FUNCTIONS ------------------------------------------------------------------------

/*OBS: Arrow functions não podem ter um nome ou chave, elas sempre
ter que estar atreladas a uma variavel por serem sempre funções anonimas.*/

//ARROW FUNCTION - COM RETORNO IMPLICITO
const sum = (number1, number2) => number1 + number2
console.log(sum(23,41))

//ARROW FUNCTION - COM RETORNO EXPLICITO
const sum2 = (number1, number2) => {
    return number1 + number2
}
//Caso a palavra (return) não seja usada dentro do bloco o retorno será (undefined)
console.log(sum2(32,34))

//ARROW FUNCTION - SEM PARAMETROS
const community = () => {
    return 'CollabCode'
}
console.log(community())

//ARROW FUNCTION - COM APENAS UM PARAMETRO SEM PARENTESES () 
const double = number => number * 2 // sem parenteses no parametro (number) retorna mesmo valor com ().
console.log(double(2)) // retorna número 4
//Só funciona se tiver apenas um parametro.







//CURRYING
// Currying é uma função que de acordo com a execução do codigo os parametros passados 
// até se obter o resultado da expressão por completo.

//FUNÇÃO NORMAL
function funcNormal(valor1, valor2){
  return valor1 + valor2
}
console.log('Função Normal =', funcNormal(3,2))

//FUNÇÃO CURRYING
//Recebe primeiro (valor1 = 10)
function funcCurried(valor1){
// Função (funcCurried) retorna outra função e recebe segundo valor (valor2 = 20)
  return function (valor2) {
    return valor1 + valor2
  }
}
const func2Curried = funcCurried(10)
//Passado segundo parametro em um segundo momento no codigo 
console.log('Função Curried =', func2Curried(20))

//Arrow Function - (Curried)
const funcArrow = (valor1) => (valor2) => (valor3) => {
  return valor1 + valor2 + valor3}
console.log(funcArrow (1)(2)(3))


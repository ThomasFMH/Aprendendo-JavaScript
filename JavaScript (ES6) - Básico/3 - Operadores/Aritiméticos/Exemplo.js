var a = 2
var b = 4

//ORDEM DE PRECEDÊNCIA - Ordem de calculo --------------------------------------------------
// 1 Primeiro - Toda operação entre => ( ).
console.log(a + (a * b)) // Operação entre (?).
// 2 Segundo - (**). 
console.log(a ** b) // Ao quadrado (**)
// 3 Terceiro - (*) (/) (%).
console.log(a * b) // Multiplicação (*)
console.log(a / b) // Divisão (/)
console.log(a % b) // Resto Divisão (/)
// 4 Quarto - (+) (-).
console.log(a + b) // Soma (+)
console.log(a - b) // Subtração (-)
//-------------------------------------------------------------------------------------------

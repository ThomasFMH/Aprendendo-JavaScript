// SPREAD OPERATOR - 
// Com spread operator (...) é possivel clonar objetos e arrays e concatena-los de forma simples apenas colocando depois de (...) o que ira ser copiado.

const primeiro = [1,0,3]
const segundo = [4,3,6]

const combinadoMetodo = primeiro.concat(segundo) // Concatena dois arrays com o metodo (.concat).
console.log(combinadoMetodo)

const combinadoSpread = [...primeiro,'a',...segundo,'#'] // Clona arrays e pode concatenar.
console.log(combinadoSpread)

const clonadoSpread = [...combinadoSpread]
console.log(clonadoSpread)

var objeto = {
    nome: 'Thomas',
    sobrenome: 'Facchina'
} 
var objetoSpread = {...objeto,idade: 23}
console.log(objetoSpread)


const cortado = combinadoMetodo.slice(1) //Com o método (.slice(parametro)) procura pela valor dentro do Array e imprime o que está depois do valor se achado.
console.log(cortado)


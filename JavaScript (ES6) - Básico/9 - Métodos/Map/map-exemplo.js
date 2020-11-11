/* 
MAP - MÉTODO 
Retorna um novo array com a mesma quantidade 
de elementos que o array inicial.
*/

const pets = [
    {
        nome: 'rex',
        especie: 'cachorro',
        idade: 8
    },
    {
        nome: 'flofi',
        especie: 'gato',
        idade: 2
    },
    {
        nome: 'pingo',
        especie: 'passaro',
        idade: 1
    }
]

const petNames = pets.map((pet) => {
    return pet.nome
})

console.log(petNames)


/* 
FOREACH - MÉTODO 
Não retorna um novo array com a mesma quantidade de elementos.
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

//Criado novo array
const forEachPetNames = []

// Passa com forEach os valores desejados para o array (forEachPetNames).
pets.forEach((pet) => {
    forEachPetNames.push(pet.nome)
})

console.log(forEachPetNames)

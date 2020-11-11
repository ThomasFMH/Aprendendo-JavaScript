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


//MÉTODO FILTER - SIMPLES
//utilizando o metodo (.filter) é possivel filtrar um array de objetos.
const newPets = pets.filter((pet) => {
    return pet.idade < 5
})

//MÉTODO FILTER - COMPLEXO
//Função para validar a função (newPets)
const menorQ5 = numero => numero < 5
//Desconstrução do objeto para passar direto o parametro (idade)
const newPets2 = pets.filter(({idade}) => menorQ5(idade))

console.log(newPets)
console.log(newPets2)
console.log(pets)


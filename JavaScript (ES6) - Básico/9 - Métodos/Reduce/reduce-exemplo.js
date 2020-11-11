//REDUCE - EXEMPLOS 

const pets = [
    {
        nome: 'rex',
        especie: 'cachorro',
        idade: 8,
        peso: 25
    },
    {
        nome: 'flofi',
        especie: 'gato',
        idade: 2,
        peso: 10
    },
    {
        nome: 'pingo',
        especie: 'passaro',
        idade: 1,
        peso: 1
    }
]

//MÉTODO - 1
//Soma os pesos de todos os Objetos dentro do Array. 
const totalPeso = pets.reduce((total, pet) => {
    console.log(`Total: ${total}`)
    console.log(`Pet: ${pet.nome}`)
    return total + pet.peso
}, 0) 

//MÉTODO - 2
//Soma todas as Idades e Pesos e passa para um novo Array a soma dos valores.
const totalPeso2 = pets.reduce((total, pet) => {
    return {
        totalIdade: total.totalIdade + pet.idade,
        totalPeso: total.totalPeso + pet.peso
    }   
}, {totalIdade: 0, totalPeso: 0})

//MÉTODO - 3
//Faz a soma dos pesos apenas da especie 'Cachorro' e passo o valor total do peso.
const totalPeso3 = pets.reduce((total, pet) => {
    if (pet.especie !== 'cachorro') return total
    return total + pet.weight
}, 0)

//MÉTODO - 4
//Dois Methos diferentes em cascata sendo utilizando para trazer apenas os 'pesos' dos 'cachorros'.
const totalPesoCachorros = pets
.filter ((pet) => {
    return pet.especie === 'cachorro'
})
.reduce((total,pet) => {
    return total + pet.peso
}, 0)

//MÉTODO - 1
console.log(totalPeso)
//MÉTODO - 2
console.log(totalPeso2)
//MÉTODO - 3
console.log(totalPeso3)
//MÉTODO - 4
console.log(totalPesoCachorros)





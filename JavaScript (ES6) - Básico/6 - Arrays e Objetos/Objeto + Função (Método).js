let amigo = {
    nome:'José', 
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
        // Utilizando (this.) faz referencia ao proprio objeto (amigo).
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)


//console.log(typeof amigo) - Com o metodo (typeof) é possivel saber qual o tipo Exemplo: object
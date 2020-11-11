function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parimpar(4) // Chama a função colocando dentro de uma variavel ou propriedade chamando o nome da função e passando o parametro.
console.log(parimpar(4)) // Chama a função com um log no console passando um parametro.
console.log(res)
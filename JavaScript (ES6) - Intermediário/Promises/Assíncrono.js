//EXEMPLO DE UMA PROMISSE - (NÃO É UMA PROMISSE)

//Valida as informações na função (sumNumber).
function sumNumbers() {
    let result = 1 + 1

    if (result == 2) {
        sucessCallback()
    } else {
        errorCallback()
    }
}

//Chama funções externas (callbacks) para validar a função principal (sucessCallback).
function sucessCallback() {
    console.log("Yeah! Number 2!")
}

//Chama funções externas (callbacks) para validar a função principal (sucessCallback).
function errorCallback() {
    console.log("Oops! Something wrong.")
}

sumNumbers()
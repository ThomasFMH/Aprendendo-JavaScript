let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
let item = document.createElement('option')
let n = Number(num.value) 
var vetor = []

function adnum() {
    if (n <= 0) {
        window.alert('Por favor, digite um número entre 1 e 100!')
    } else if (n >= 101) {
        window.alert('Por favor, digite um número entre 1 e 100!')
    // } else if (vetor == 2) {
    //     window.alert('Esse número já está cadastrado')
    } else {
        vetor.push(n)
        item.text = `Valor ${n} adicionado.`
        item.value = n
        tab.appendChild(item)
    }
}
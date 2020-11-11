//PROMISSE 
//Obs: Promisse é um objeto
// Promisses são usadas para efetuar tarefas aonde essa pode ter sucesso ou falha. 

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Sucess')
    } else {
        reject('Failed')
    }
})

//(p.then) para 
p.then((message) => {
    console.log('(then) resolvido com sucesso' + message)
}).catch((err) => {
    console.log('(catch) falhou e está msg está aparecendo.' + err)
})
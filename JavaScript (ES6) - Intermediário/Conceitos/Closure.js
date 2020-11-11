//CLOSURE - Escopo lexico
//É a capacidade de uma (Função - Filha) de lembrar do ambiente (Função - Pai) que ela foi criada.

// Função (Pai)
function init() {
  const exemplo = 'Exemplo1'
  const exemplo2 = 'Exemplo2'
  const exemplo3 = 'Exemplo3'

  // Função (Filha)
  return function() {
    console.log(`1 - O valor da variável exemplo é: ${exemplo}.`)

    return function() {
      console.log(`2 - O valor da variável exemplo é: ${exemplo2}.`)

      return function () {
        console.log(`3 - O valor da variável exemplo é: ${exemplo3}.`)
      }
    }
  }
}

//Executa todas as funções em uma linha.
// init()()()()

//Executa as funções em cascata sendo atribuidas a cada variavel e depois sendo chamada pela ( initFn3() )
const initFn1 = init()
const initFn2 = initFn1()
const initFn3 = initFn2()
initFn3()



// (() => {
//   const exemplo = "Essa variável";

//   const funcao1 = () => {
//     console.log(`Será lembrada aqui: ${exemplo}`);

//     return () => {
//       console.log(`Aqui também: ${exemplo}`);

//       return () => {
//         console.log(`Acredito que já entendemos o que é Closure: ${exemplo}`);
//       };
//     };
//   };

//   funcao1()()();
// })();

//HOISTING - Levantar ou suspender
//Eleva uma variavel ou função para o escopo de bloco, função ou global

function fn() {
  log("Hoisting de função")
  //chama a função (log) dentro da função (fn) mesmo tendo sido declarada depois na linha 4.
  function log(value) {
    console.log(value)
  }
}
fn()





/**
function fn() {
    function log(value) {
        console.log(value);
    }

    log('Hoisting de função');
}
 */

//HOISTING - Levantar ou suspender
//Eleva uma variavel ou função para o escopo de bloco, função ou global

function fn() {
  console.log(text); // Undefined
  var text = "Exemplo";
  console.log(text); // Exemplo
}

var text = "Exemplo";

fn();

/**
 function fn() {
     var text;
     console.log(text);

     text = 'Exemplo';

     console.log(text);
 }
 */

 //FUNÇÃO DE PRIMEIRA CLASSE 
 //Pode ser atribuida a uma variavel, Objeto, Array ou parametros.
 
 function getName() {
    return 'Gulherme Cabrini da Silva'
 } 

 //Funçõa chamada como parametro 
 function logFn(fn) {
     console.log(fn())
 }

 //Função dentro de um Objeto
 const objeto = {
    logFn: logFn
 }

 //Função dentro de um Array
 const array = [logFn]
array.push(logFn)


 const logFnResult = logFn

 //Função passada como Parametro
 logFnResult(getName)



//  (() => {
//    const getName = () => {
//      return "Guilherme Cabrini da Silva";
//    };
 
//    const log = value => {
//      console.log(value);
//    };
 
//    const main = fn => {
//      return () => log(fn());
//    };
 
//    const logName = main(getName);
 
//    logName();
//  })();
 
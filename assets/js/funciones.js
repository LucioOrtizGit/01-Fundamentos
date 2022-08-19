function saludar(nombre){
    console.log(arguments)
    console.log('Hola ' + nombre);
    return 1;
    //No se ejecuta
    console.log('Soy un codgigo despues return');
}

const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola Flecha ' + nombre);
}

// const retornoSal = saludar('Luke',40,true,'Costa');
// console.log({retornoSal});
// saludar2('Luke');

// saludarFlecha();
// saludarFlecha2('nueva');

function sumar(a, b){
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a+b;
// }

const sumar2 = (a,b) => a+b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();





console.log(getAleatorio2());


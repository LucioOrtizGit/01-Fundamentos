const crearPersona = (nombre,apellido) =>({ nombre, apellido });


const persona = crearPersona('Luk','young');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad,...args) => console.log({edad,args});
imprimeArgumentos2(10,true,false,'hola');

const [nombre, apellido] = imprimeArgumentos2(10,true,false,'hola');



let a = 10;
let b = a;
a = 30;

console.log({a,b});

let juan = {nombre:'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan,ana});

const cambiaNombre = ({...persona})=>{
    persona.nombre = 'Tomy';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);



console.log({peter, tony});


//Arrays
const frutas = ['Manzanas','Pera'];

console.time('slice');
const otrasFrutas = [...frutas];
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = frutas.slice();
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});


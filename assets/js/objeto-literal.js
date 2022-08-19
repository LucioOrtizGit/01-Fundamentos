const personaje = {
    nombre: 'Tony',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords:{
        lat:34.034,
        lon:-118.70
    },
    trajes:['Mark I', 'Mark V'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
};
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log('N trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('ultima pelicula', personaje['ultima-pelicula']);

//Mas detalles
delete personaje.edad;
console.log(personaje);

personaje.casado =true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

Object.freeze(personaje);

personaje.dinero=10000000;
personaje.casado = false;
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades,valores});





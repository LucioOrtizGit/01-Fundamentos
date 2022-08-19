let juegos = ['Zelda', 'Mario','Metroid'];
console.log('Largo:',juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length -1];

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento,indice,arr})
});

let nuevoLen = juegos.push('F-Zero');
console.log({nuevoLen,juegos});

nuevoLen =  juegos.unshift('Yoshi');
console.log({nuevoLen,juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado,juegos});

let pos = 1;
let borrados = juegos.splice(pos,2);
console.log({borrados,juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});




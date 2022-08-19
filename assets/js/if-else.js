let dia = 3;

//objeto
let diasSemanas = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
};

//array
let diasSemanas2 = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
];
console.log(diasSemanas2[dia]);

const esMiembro = (miembro) => (miembro) ? '2 dolars' : '10 Dolars';
console.log(esMiembro(true));
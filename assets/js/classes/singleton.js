

class Singleton {

    static instancia;
    nombre = '';

    constructor (nombre = ''){

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }
}

const inst1 = new Singleton('Iron');
const inst2 = new Singleton('Spi');
const inst3 = new Singleton('Black');



console.log(`Nombre en la instancia1 es: ${inst1.nombre}`);
console.log(`Nombre en la instancia2 es: ${inst2.nombre}`);
console.log(`Nombre en la instancia3 es: ${inst3.nombre}`);


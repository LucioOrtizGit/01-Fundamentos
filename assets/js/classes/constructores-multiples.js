

class Persona{

    //Constructor sobrecargado (apaño)
    static porObjeto(nombre, apellido, pais){
        return new Persona(nombre,apellido,pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais} `);
    }
}

const nombre1 = 'Elena',
    apellido1 = 'Flor',
    pais1 = 'Grecia';

const luk = {
    nombre : 'Lucio',
    apellido : 'Ortiz',
    pais : 'Spain'
}


    const persona1 = new Persona (nombre1,apellido1,pais1);
    const persona2 = Persona.porObjeto( luk.nombre,luk.apellido,luk.pais );


    persona1.getInfo();
    persona2.getInfo();
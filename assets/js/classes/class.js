class Persona{

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre',codigo = 'Sin codigo',frase = 'Sin frase'){

        this.codigo = codigo;
        this.frase = frase;
        this.nombre = nombre;

        Persona._conteo++;
    }

    set setComidaFavorita (comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi id es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`Mi frase es ${this.frase}`);
    }
}

const spiderman = new Persona('Peter','Spidy','Soy Spiderman');
const ironman = new Persona('Tony','Iron','Soy IronMan');


console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();
ironman.miFrase();

spiderman.setComidaFavorita = 'Arandanos';
// spiderman.nemesis ='Duende verde';

console.log(spiderman.getComidaFavorita);
console.log(spiderman);

console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Esto es raro';
console.log(Persona.propiedadExterna);
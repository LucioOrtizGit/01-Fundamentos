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

class Heroe extends Persona{
    clan = '';

    constructor(nombre,codigo,frase){       
        super(nombre,codigo,frase);
        this.clan = 'Avengares';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} el heroe`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter','Spidy','Soy Spiderman');
console.log(spiderman);
spiderman.quienSoy();

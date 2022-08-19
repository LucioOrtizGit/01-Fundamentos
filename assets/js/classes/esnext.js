class Rectangulo{
    //campo privado
    #area = 0;

    constructor (base = 0, altura = 0) {
        this.altura = altura;
        this.base = base;

        this.#area = base * altura;
    }

    //metodo privado
    #calcularArea(){
        console.log(this.#area * 2);
    }
}


const rectangulo = new Rectangulo(10,15);
// rectangulo.#area = 100;

console.log(rectangulo);
class Pessoa{
    constructor(nome /*parametro*/, sobrenome) { /*construct metodo*/
        this._nome/*.atributo*/ = nome;
        this._sobrenome = sobrenome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    
    /* Dentro da classe a função se chama metodo */

    falar(msg) { /*metodo falar*/
        console.log(`$(this.nome) está falando: ${msg}`);
    }

    comer() {  /*metodo comer*/
        console.log(`$(this.nome) está comendo...`);
    }

    beber() {  /*metodo beber*/
        console.log(`$(this.nome) $(this.sobrenome) está bebendo...`);

    }
}

class Carro{
    constructor(modelo) {
        this._marca = 'Ford';
        this._modelo = modelo;
    }

    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

    imprimir() {  /*metodo imprimir*/
        console.log(`$(this.marca) $(this.modelo)`)
    }
    
}
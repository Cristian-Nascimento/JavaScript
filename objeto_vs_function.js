// criando objeto atraves de uma factory function
const pessoa1 = (nome, sobrenome) => {
    return {
        andar: () => console.log(`${nome} ${sobrenome} está andando`)
    }
}

const p1 = pessoa1('cristian', 'nascimento');
p1.andar();

// criando objeto atraves de uma construction function
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.andar = function () {
        console.log(`${this.nome} ${this.sobrenome} está andando`);
    }
}

console.log();
const p2 = new Pessoa2('Cristian', 'Nascimento');
p2.andar();

// criando objeto atraves de uma class

class Pessoa3 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    andar() {
        console.log(`${this.nome} ${this.sobrenome} está andando`);
    }
}

console.log();
const p3 = new Pessoa3('Cristian', 'Nascimento');
p3.andar();
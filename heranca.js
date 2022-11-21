class Funcao {
    constructor(descricao, salario) {
        this._descricao = descricao;
        this._salario = salario;
    }

    get Descricao() {
        return this._descricao;
    }

    set Descricao(descricao) {
        this._descricao = descricao;
    }

    get salario() {
        return this._salario;
    }

    set salario(salario) {
        this._salario = salario;
    }
}

class Pessoa {
    constructor(nome, sobrenome, email, cpf) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get Nome() {
        return this._nome;
    }
    set Nome(nome) {
        this._nome = nome;
    }

    get Sobrenome() {
        return this._sobrenome;
    }

    set Sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    get Email() {
        return this._email;
    }

    set Email(email) {
        this._email = email;
    }

    get Cpf() {
        return this._cpf;
    }

    set Cpf(cpf) {
        this._cpf = cpf;
    }

    get nome_completo() {
        return this._nome + ' ' + this._sobrenome;
    }

    set nome_completo(nome_completo) { 
        nome_completo = nome_completo.split(' ');

        this._nome = nome_completo.shift();
        this._sobrenome = nome_completo.join(' ');
   }
}

class Funcionario extends Pessoa {
    constructor(nome, sobrenome, email, cpf, funcao, registro) {
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get Funcao() {
        return this._funcao;
    }

    set Funcao(funcao) {
        this._funcao = funcao;
    }

    get Registro() {
        return this._registro;
    }

    set Registro(registro) {
        this._registro = registro;
    }

}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda) {
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }
    
    get Renda() {
        return this._renda;
    }

    set Renda(renda) {
        this._renda = renda;
    }
}
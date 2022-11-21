const curso = {
    nome: "java",
    horas: 25,
    valor: 280
}

console.log(curso);

console.log(Object.keys(curso));
console.log(Object.values(curso));
console.log()

console.log(Object.entries(curso));
console.log()

Object.entries(curso).forEach(par => console.log(par));
console.log()

Object.entries(curso).forEach(par => {
    console.log(`${par[0]}: ${par[1]}`);
});

Object.defineProperty(curso, 'data', {
    enumerable: true,
    writable: false,
    value: "07/10/2014"
});


console.log();
const usuario = [
    { nome: 'cristian', empresa: 'ENACOM' },
    { nome: 'cristian', empresa: 'ENACOM' },
    { nome:'cristian', empresa:'ENACOM'}
]

console.table(usuario);
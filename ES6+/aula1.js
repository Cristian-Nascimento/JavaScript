let nome = "I not Afraid";

for (let letra of nome) {
    console.log(letra);
}

let numeros = [1, 2, 3, 4, 5];

for (let indice in numeros) {
    console.log(`Índice: ${indice}, Valor: ${numeros[indice]}`);
}

let cursos = new Map([
    [1, 'Programador BR'],
    [2, 'Java do básico ao avançado'],
    [3, 'Python'],
    [4, 'JavaScript'],
]);

for (let curso of cursos) {
    console.log(`${curso[0]} - ${curso[1]}`);
}

for (let curso of cursos) {
    console.log(curso);
}

for (let chave of cursos.keys()){
    console.log(chave);
}


// 1 - referenciar input
let input = document.querySelector('input[name=tarefa]');

// 2 - referenciar button
let button = document.querySelector('#botao');

// 3 - referenciar lista
let lista = document.querySelector('#lista');

let tarefas = [
    'Realizar Projeto Js',
    'Almoçar',
    'Estudar ingles',
    'Praticar ingles',
    'Realizar prova de Testes',
    'Ler um Livro'
];

function redenrizarTarefas() {
    for ( tarefa of tarefas ) {
        let itemLista = document.createAttribute('li');   // Criar item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');    // Adicionar classes no item da lista
        let itemTexto = document.createTextNode(tarefa);    //Criar um texto
        itemLista.appendChild(itemTexto);   // Adicionar o texto no item da lista
        lista.appendChild(itemLista);   // Adicionar o item da lista na lista
    }
}

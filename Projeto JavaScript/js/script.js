// 1 - referenciar input
let input = document.querySelector('input[name=tarefa]');

// 2 - referenciar button
let btn = document.querySelector('#botao');

// 3 - referenciar lista
let lista = document.querySelector('#lista');

// 4 - referenciar conteúdo
let card = document.querySelector('.card');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTask() {

    lista.innerHTML = '';

    for ( let tarefa of tasks ) {
        let itemLista = document.createElement('li');   // Criar item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');    // Adicionar classes no item da lista
        itemLista.onclick = function () { 
            deletedTask(this);
        }
        let itemTexto = document.createTextNode(tarefa);    //Criar um texto
        itemLista.appendChild(itemTexto);   // Adicionar o texto no item da lista
        lista.appendChild(itemLista);   // Adicionar o item da lista na lista
    }
}

renderTask();

btn.onclick = function () {    // Executar o evento de clique no botão
    
    let newTarefa = input.value;    // Capturar o valor digitado pelo usuário
    
    if (newTarefa !== '') {
        tasks.push(newTarefa);    // Atualizar a nova tarefa na lista (array)  de tarefas e renderizar a tela
        renderTask();    // Executando a função para renderizar as tarefas
        input.value = '';    // Limpar o input
        removedSpan();    // Limpar mensagem de erro
        saveDadaStorage();    // Salvar no banco de dados
    }
    
    else {
        removedSpan();        
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');
        let msg = document.createTextNode('Você precisa informar a tarefa!');
        span.appendChild(msg);
        card.appendChild(span);
    }
}

function removedSpan() {
    
    let spans = document.querySelectorAll('span');    
    
    for (let span of spans) {
        card.removeChild(span);
    }

    saveDadaStorage();
}

function deletedTask(tar) {
    tasks.splice(tasks.indexOf(tar.textContent), 1);
    renderTask();
    saveDadaStorage();
}

function saveDadaStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


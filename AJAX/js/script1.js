let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');


btn.onclick = function () {
    div.innerHTML = '';

    let ajax = new XMLHttpRequest();

    ajax.open('GET', `https://api.github.com/users/${input.value}`);
    ajax.send(null);
    ajax.onreadystatechange = function () {
        let spanNone = document.createElement('span');
        let txtNone = '';
        if ( ajax.readyState === 4 ) {
            if ( ajax.status === 200 ) { 
                let usuario = JSON.parse(ajax.responseText);

                if (usuario['name'] !== null) {
                    txtNone = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');
                    div.appendChild(img);
                } else {
                    txtNone = document.createTextNode(`O usuário ${input.value} não tem nome.`);
                }
                spanNone.appendChild(txtNone);
                div.appendChild(spanNone);
                input.value = '';
            } else {
                txtNone = document.createTextNode(`Não foi encontrado ${input.value}`);
                spanNone.appendChild(txtNone);
                div.appendChild(spanNone);
                input.value = '';
            }
        }
    }
}
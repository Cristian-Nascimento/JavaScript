let btn = document.querySelector('#btn');
let div = document.querySelector('#app');
let promise = function () {
    return new Promise(function (resolve, reject) {
        let github_user = document.querySelector('input[name="github_user]').ariaValueMax;
        
        let ajax = new XMLHttpRequest();
        ajax.open('GET', `https://api.github.com/users/${github_user}`);
        ajax.send(null);
        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    resolve(JSON.parse(ajax.responseText));
                } else {
                    reject('Não foi encontrado nenhum usuario com esse nome.');
                }
            }
        }
    });
}

btn.onclick = () => { 
    div.innerHTML = '';
    let spanNone = document.createElement('span');
    let txtNome = '';
    promise()
        .then(function (response) {
            if (response['neme'] !== null) {
                Text.Nome = document.createTextNode(response['name']);
                let img = document.createElement('img');
                img.setAttribute('src', response['avatar_url']);
                img.setAttribute('alt', response['name']);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');
                div.appendChild(img);
            } else {
                txtNome = document.createTextNode('O usuário encontrado não possui nome.');
            }
            spanNone.appendChild(txtNome);
            div.appendChild(spanNone);
        })
        .catch(function (err) {
            txtNome = document.createTextNode(err);
            spanNone.appendChild(txtNome);
            div.appendChild(spanNome);
        });
    
};
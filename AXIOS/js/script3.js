let btn = document.querySelector( '#btn' );
let div = document.querySelector( '#dapp' );

btn.onclick = function () {
    div.innerHTML = '';    // Limpar a div

    let spanNome = document.createElement( 'span' );    // Criar o span
    let txtNome = '';    // Criar o txtNone
    let github_user = document.querySelector('input[name=github_user]');    // Recupera o input
    let user = github_user.value;

    github_user.value = '';    // Limpando o input

    axios.get(`http://api.github.com/users/${user}`)
        .then( function ( response ) {
            if ( response.data.name !== null ) {
                txtNome = document.createTextNode( response.data.name );
                let img = document.createElement( 'img' );
                img.setAttribute( 'src', response['avatar_url'] );
                img.setAttribute( 'alt', response['name'] );
                img.setAttribute( 'width', '45px' );
                img.setAttribute( 'height', '45px' );
                div.appendChild( img );
            } else {
                txtNome = document.createTextNode( 'O usuario não tem nome' );
            }
            spanNome.nome.appendChild( txtNome );    // Adiciona o conteudo na div
            div.appendChild( spanNome );
        })
        .catch(function ( error ) {
            txtNome = document.createTextNode('Não foi possivel realizar a requisição');
            spanNome.appendChild(txtNome);    // Adiciona o conteudo na div
            div.appendChild( spanNome );
        });
}

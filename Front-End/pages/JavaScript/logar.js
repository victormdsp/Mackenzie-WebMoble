let aux = 0;

let getData = () => {
    let url = "http://localhost:3000/user"

    fetch(url)
        .then(async (response) => {
            let res = await response.json();
            verificaLogin(res);
        })
}

let verificaLogin = (data) => {
    let usuario = document.getElementById('usuario');
    let senha = document.getElementById('senha');
    data.forEach(element => {
        if (element.login == usuario.value && element.senha == senha.value) {
            aux = 1;
            localStorage.setItem("storageItem", usuario.value);
            location.href = "../Pages/paginaPrincipal.html"
        }
    });

    if(aux == 0){
        let formulario = document.getElementById('formLogin');
        let error = document.createElement('h2');
        error.innerHTML = "Login ou senha incorreto!"
        formulario.appendChild(error);
        aux = 1;
    }
}

let voltar = () =>{
    location.href = "../Pages/index.html"
}
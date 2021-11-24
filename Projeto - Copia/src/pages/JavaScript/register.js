let aux = 0

let criar = () =>{
    let span = document.getElementById('span')
    let usuario = document.getElementById('usuario');
    let senha = document.getElementById('senha');

    if(aux == 0 && (usuario.value == "" || senha.value == "")){
        let aviso = document.createElement("h2");
        aviso.innerHTML = "Usuário ou Senha inválido";
        span.appendChild(aviso);
        aux = 1;
    }

    else{
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/user",
            data: {
                login: usuario.value,
                senha: senha.value
            }
        })

        location.href = "../Pages/index.html"
    }
}

let voltar = () =>{
    location.href = "../Pages/index.html"
}
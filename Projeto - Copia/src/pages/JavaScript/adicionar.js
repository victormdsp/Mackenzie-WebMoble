let aux = 0

window.onload = () =>{
    console.log(localStorage.getItem("storageItem"))
}

let adicionarFunko = () =>{
    let imagem = document.getElementById('imagem');
    let name = document.getElementById('nome');
    let colecao = document.getElementById('colecao');
    let tipo = document.getElementById('tipo');
    let preco = document.getElementById('preco')

    if(aux == 0 && (imagem.value == "" || name.value == "" 
      || colecao.value == "" || tipo.value == ""
      || preco.value == "")){

        let aviso = document.createElement("h2");
        aviso.innerHTML = "Alguma informação está inválida";
        aux = 1;
    }

    else{
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/funkos",
            data: {
                user: localStorage.getItem("storageItem"),
                img: imagem.value,
                name: name.value,
                colecao: colecao.value,
                tipo: tipo.value,
                preco:  preco.value
            }
        })

        location.href = "../Pages/paginaPrincipal.html"
    }
}

let voltar = () =>{
    location.href = "../Pages/paginaPrincipal.html"
}
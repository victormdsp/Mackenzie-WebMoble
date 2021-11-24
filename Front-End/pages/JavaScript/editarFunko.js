window.onload = () =>{
    // let teste = JSON.parse(JSON.stringify(localStorage.getItem("funkos")))
    // console.log((teste));
}

let voltar = () =>{
    location.href = "../Pages/paginaPrincipal.html"
}

let updateFunko = () =>{
    let funko = JSON.parse(JSON.stringify(localStorage.getItem("funkos")))
    funko = JSON.parse(funko)
    console.log(funko)
    let url = document.getElementsByTagName('input')[0]
    let name = document.getElementsByTagName('input')[1]
    let colecao = document.getElementsByTagName('input')[2]
    let tipo = document.getElementsByTagName('input')[3]
    let preco = document.getElementsByTagName('input')[4]
    $.ajax({
        method: "PATCH",
        url: "http://localhost:3000/funkos/"+funko.id,
        data: {
            user: funko.user,
            id: funko.id,
            img: url.value ? url.value : funko.img,
            name: name.value ? name.value : funko.name,
            colecao: colecao.value ? colecao.value : funko.colecao,
            tipo: tipo.value ? tipo.value : funko.tipo,
            preco: preco.value ? preco.value : funko.preco,
        }
    })

    location.href = "../Pages/paginaPrincipal.html"
}

let excluirFunko = () =>{
    let funko = JSON.parse(JSON.stringify(localStorage.getItem("funkos")))
    funko = JSON.parse(funko)
    $.ajax({
        method: "DELETE",
        url: "http://localhost:3000/funkos/"+funko.id
    })

    location.href = "../Pages/PaginaPrincipal.html"
}
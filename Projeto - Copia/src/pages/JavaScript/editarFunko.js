window.onload = () =>{
    let teste = JSON.parse(JSON.stringify(localStorage.getItem("funkos")))
    console.log((teste));
}

let voltar = () =>{
    location.href = "../Pages/paginaPrincipal.html"
}
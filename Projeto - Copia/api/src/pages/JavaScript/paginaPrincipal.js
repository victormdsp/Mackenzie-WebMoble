window.onload = () => {
    let url = "http://localhost:3000/funkos"
    
    fetch(url)
        .then(async (response) => {
            let res = await response.json();
            showFunkos(res);
        })
}

let adicionar = () =>{
    location.href = "../Pages/adicionar.html"
}

let showFunkos = (data) =>{
    let main = document.getElementById('main');
    if(data.find(element => element.user == localStorage.getItem('storageItem'))){
        let div = document.createElement('div');
        div.id = 'funkos';
        data.forEach(element => {
            if(element.user == localStorage.getItem("storageItem")){
                let section = document.createElement("section");
                section.className = 'funkoSection';
                section.value = element
                section.onclick = () =>{
                    localStorage.setItem("funkos", JSON.stringify(section.value))
                    location.href = "../Pages/editarFunko.html"
                }
                let divisao = document.createElement("div");
                divisao.className = 'funkoDiv';
                let imagem = document.createElement("img");
                imagem.src = element.img;
                let name = document.createElement("p");
                name.innerHTML = element.name;
                section.appendChild(divisao);
                divisao.appendChild(imagem);
                section.appendChild(name);
                div.appendChild(section);
            }
        });
        main.appendChild(div);
    }

    else{
        let div = document.createElement('div');
        div.id = 'empty';
        let texto = document.createElement('h1');   
        texto.innerHTML = "Você ainda não possui Funkos, clique em seu avatar para adicioná-los.";
        div.appendChild(texto);
        main.appendChild(div);
    }
}

let passFunko = (funko) =>{
    location.href = "../Pages/editarFunko.html"
}
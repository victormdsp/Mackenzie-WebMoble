// callAPI("https://superheroapi.com/api.php/10207244891555840/542", function(response){
//     console.log("callback");
//     console.log(response);
// });

var heroes = [];
var numHeroes = 4;
let press = 0;

let teste = () =>{
    let div = document.createElement('div')
    div.id = 'cartas'
    document.body.appendChild(div)
}

teste()

for(var i=0; i<numHeroes; i++){
    callAPI("https://superheroapi.com/api.php/10207244891555840/"+getRandomInt(1,731), function(response){
        createHero(response);
    });
}

let start = document.createElement('button');
start.innerHTML = "Jogar"

function createHero(response){
    var hero = new Hero( response.id, 
                         response.name,
                         response.image.url,
                         (response.powerstats.intelligence == "null") ? 0 : parseInt(response.powerstats.intelligence),
                         (response.powerstats.strength == "null") ? 0 : parseInt(response.powerstats.strength),
                         (response.powerstats.speed == "null") ? 0 : parseInt(response.powerstats.speed),
                         (response.powerstats.durability == "null") ? 0 : parseInt(response.powerstats.durability),
                         (response.powerstats.power == "null") ? 0 : parseInt(response.powerstats.power),
                         (response.powerstats.combat == "null") ? 0 : parseInt(response.powerstats.combat) );
    heroes.push(hero);
    showHero(hero);
}

function checkHeroes(playerSelect){
    if(heroes.length == numHeroes){
        var maxHero = [0,0,0,0,0,0];
        let pontosHerois = [];
        let pontos = 0;
        let ganhador = [0,0];
        for(var i = 0; i < heroes.length; i++){
            for(var j = 0; j < heroes.length; j++){
                if(heroes[i].intelligence < heroes[j].intelligence){
                    maxHero[0] = 1;
                }
                if(heroes[i].strength < heroes[j].strength){
                    maxHero[1] = 1;
                }
                if(heroes[i].speed < heroes[j].speed){
                    maxHero[2] = 1;
                }
                if(heroes[i].durability < heroes[j].durability){
                    maxHero[3] = 1;
                }
                if(heroes[i].power < heroes[j].power){
                    maxHero[4] = 1;
                }
                if(heroes[i].combat < heroes[j].combat){
                    maxHero[5] = 1;
                }
            }

            for(var k = 0; k < maxHero.length; k++){

                if(maxHero[k] == 0){
                    pontos += 1;
                }
                else{maxHero[k] = 0}
            }
            pontosHerois.push(pontos)
            pontos = 0
        }
        for(let i = 0; i < pontosHerois.length; i++){
            if(pontosHerois[i] > ganhador[0]){
                ganhador[0] = pontosHerois[i];
                ganhador[1] = i; 
            }
        }

        let resultado = document.createElement('p');
        resultado.style.color = "#fff"
        if(playerSelect === heroes[ganhador[1]].name){

            resultado.innerHTML = "Venceu";
            document.body.appendChild(resultado)
        }

        else{
            resultado.innerHTML = "Perdeu"
            document.body.appendChild(resultado)
        }

        let borda = document.getElementsByTagName('article')[ganhador[1]]
        borda.style.border = '5px solid black';
        borda.style.backgroundColor = '#7a7';

    } 
}


function getRandomInt(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function showHero(hero){

    var str = "<article onclick = 'usuario()' style> <h3>" + hero.name + "</h3>";
    str += "<img alt='imagem' src='" + hero.imageURL + "'/>";

    str += "<p> Inteligência: " + hero.intelligence + "</p>";
    str += "<div style='width: "+ hero.intelligence+"%; background-color: #00f'></div>";

    str += "<p> Força: " + hero.strength + "</p>";
    str += "<div style='width: "+ hero.strength+"%; background-color: #f00'></div>";

    str += "<p> Velocidade: " + hero.speed + "</p>";
    str += "<div style='width: "+ hero.speed+"%; background-color: #0f0'></div>";

    str += "<p> Durabilidade: " + hero.durability + "</p>";
    str += "<div style='width: "+ hero.durability+"%; background-color: #90f'></div>";

    str += "<p> Poder: " + hero.power + "</p>";
    str += "<div style='width: "+ hero.power+"%; background-color: #f90'></div>";

    str += "<p> Combate: " + hero.combat + "</p>";
    str += "<div style='width: "+ hero.combat+"%; background-color: #900'></div>";

    str += "</article>";

    let div = document.getElementById('cartas')
    div.innerHTML += str
}

function callAPI(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log(xhr.response)
            callback(xhr.response);
        } else {
            alert("Houve um problema ao acessar o banco de dados de heróis.");
        }
    }
    xhr.send();
}

class Hero {
    constructor(id, name, imageURL, intelligence, strength, speed, durability, power, combat){
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
        this.intelligence = intelligence;
        this.strength = strength;
        this.speed = speed;
        this.durability = durability;
        this.power = power;
        this.combat = combat;
    }
}

let target;
let usuario = () =>{
    if(press === 0){
        if(target != undefined && target.tagName == "ARTICLE"){
            target.style.backgroundColor = '#f0f0f0';
        }
        if(event.target.tagName == "ARTICLE")
            event.target.style.backgroundColor = '#030';
            target = event.target;
        
        start.onclick = () =>{
            if(press === 0){
                let cartas = document.getElementById('cartas');
                for(let i = 0; i<cartas.children.length; i++){
                    if(cartas.children[i].style.backgroundColor != ""){
                        checkHeroes(cartas.children[i].firstElementChild.textContent);
                    }
                }
                press = 1;
            }
        }
    
        document.body.appendChild(start)
    }
    else{
        return;
    }
}
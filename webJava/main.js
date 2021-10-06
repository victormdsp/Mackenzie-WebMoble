let pos = [1,1,1,1,1,1,1,1,1] // Valores iniciais de cada posição do tabuleiro
var vezJogador = 1; // Inicialização da jogada inicial do usuário

let gameWon = false; // Inicizalização do jogo

let winner; // Variável que armazena quem foi o vencedor da rodada

// Função para iniciar as posições do tabuleiro;
let posicoes = ()  => {

    // Criação e inserção do tabuleiro no body
    let board = document.createElement("div");
    board.id = "board";
    document.body.appendChild(board);

    // Criação de cada posição do tabuleiro
    for(let i = 0; i < pos.length; i++){
        
        /*Cria os botões de cada posição do tabuleiro */
        let boardPos = document.createElement("button");
        boardPos.className = "posicao"

        /* Toda vez que ele é clicado chama a função para verificar se na posição já há um valor selecionado ou não! */
        boardPos.onclick = () =>{
            if(!gameWon){ /*Verifica se o jogo ja foi ganho para não deixar os jogadores fazerem mais jogadas */
                if(pos[i] == 1){ /* Verifica se a posição que o jogador selecionou ja foi preenchida ou não (Caso seja 1 ainda não foi preenchida) */
                    
                    if(vezJogador == 1){
                        boardPos.innerHTML = "O";
                        pos[i] = boardPos.innerHTML;
                        vezJogador = 2;
                    }
    
                    else{
                        boardPos.innerHTML = "X";
                        pos[i] = boardPos.innerHTML;
                        vezJogador = 1;
                    }
    
                }
    
                else{
                    alert("Posição ja ocupada!"); // Alerta para caso o usuário tente seleiconar um posição ja ocupada
                }
    
                testePos(); /* Verifica a cada rodada se o jogador ganhou ou não */
            }

        }
            
        board.appendChild(boardPos);

    }
}

// Função que verifica a cada jogada se o jogo foi terminado
let testePos = () =>{

    if(gameWon == false){

        /* Verifica Horizontal */
        if((pos[0] == "O" && pos[1] == "O" && pos[2] == "O") || (pos[0] == "X" && pos[1] == "X" && pos[2] == "X")){
            gameWon = true;
            winner = pos[0];
            resetGame();
        }
        else if((pos[3] == "O" && pos[4] == "O" && pos[5] == "O") || (pos[3] == "X" && pos[4] == "X" && pos[5] == "X")){
            gameWon = true;
            winner = pos[3];
            resetGame();
        }
        else if((pos[6] == "O" && pos[7] == "O" && pos[8] == "O") || (pos[6] == "X" && pos[7] == "X" && pos[8] == "X")){
            gameWon = true;
            winner = pos[6];
            resetGame();
        }

        /* Verifica Vertical */
        else if((pos[0] == "O" && pos[3] == "O" && pos[6] == "O") || (pos[0] == "X" && pos[3] == "X" && pos[6] == "X")){
            gameWon = true;
            winner = pos[0];
            resetGame();
        }
        else if((pos[1] == "O" && pos[4] == "O" && pos[7] == "O") || (pos[1] == "X" && pos[4] == "X" && pos[7] == "X")){
            gameWon = true;
            winner = pos[1];
            resetGame();
        }
        else if((pos[2] == "O" && pos[5] == "O" && pos[8] == "O") || (pos[2] == "X" && pos[5] == "X" && pos[8] == "X")){
            gameWon = true;
            winner = pos[2];
            resetGame();
        }

        /* Verifica Diagonal */
        else if((pos[0] == "O" && pos[4] == "O" && pos[8] == "O") || (pos[0] == "X" && pos[4] == "X" && pos[8] == "X")){
            gameWon = true;
            winner = pos[0];
            resetGame();
        }
        else if((pos[2] == "O" && pos[4] == "O" && pos[6] == "O") || (pos[2] == "X" && pos[4] == "X" && pos[6] == "X")){
            gameWon = true;
            winner = pos[2];
            resetGame();
        }

        /* Verifica se houve empate */
        else{
            let contador = 0;

            for(let i = 0; i < pos.length; i++){
                if(pos[i] != 1){
                    contador += 1; 
                }
            }

            if(contador == 9){
                resetGame();
            }
        }

    }

}

/* Função que quando o jogo acaba , aparece um botão para resetar o jogo */
let resetGame = (e) =>{

    // Decisão para verificar qual dos jogadores foi o vencedor e mostrar seu nome na tela 
    if(winner == "O" && playerO.innerHTML != "" && event.target.id != "menu"){
        let vencedor = document.createElement("p");
        vencedor.innerHTML = "O jogador " + playerO.innerHTML + " venceu o jogo!";
        document.body.appendChild(vencedor);
    }

    else if(winner == "X" && playerT.innerHTML != "" && event.target.id != "menu"){
        let vencedor = document.createElement("p");
        vencedor.innerHTML = "O jogador " + playerT.innerHTML + " venceu o jogo!";
        document.body.appendChild(vencedor);
    }

    // Caso o botão do menu seja pressionado
    if (event.target.id == "menu"){

        //Reseta todas as posições do tabuleiro para o valor padrão
        for(let i = 0; i< pos.length; i++){
            pos[i] = 1;
        }

        vezJogador = 1; // Reseta a vez do jogador
        gameWon = false; //Reseta o gameStatus 

        // Reseta o nome doos jogadores
        playerO.innerHTML = ""; 
        playerT.innerHTML = "";

        // Verifica e apaga qualquer paragrafo que tenha sobrado após voltar ao menu
        if(document.getElementsByTagName("p").length > 0){
            document.body.removeChild(document.getElementsByTagName("p")[0]);
            document.body.removeChild(document.getElementsByTagName("p")[0]);
            if(document.getElementsByTagName("p").length > 0){
                document.body.removeChild(document.getElementsByTagName("p")[0]);
            }
        }

        // Verifica e remove qualquer outro botão adicional sobrando
        if(document.getElementById("Reset")){
            let button = document.getElementById("Reset");
            document.body.removeChild(button);
        }

        document.body.removeChild(document.getElementById("board"));
        criacaoMenu();
    }

    // Caso para inicializar um botão de reset do tabuleiro e regras padrões do jogo
    else{
        let resetButton = document.createElement("button"); // Criação do botão de reset
        resetButton.id = "Reset"; // Atribui um Id para poder ser facilmente manipulado no css
        resetButton.innerHTML = "Resetar Jogo" // Escreve o que irá aparecer no botão
        document.body.appendChild(resetButton); // Adiciona o botão ao filho do body

        // Loop para resetar todas as variáveis do jogo e refazer o tabuleiro
        resetButton.onclick = () =>{
            for(let i = 0; i< pos.length; i++){
                pos[i] = 1;
            }

            vezJogador = 1;
            gameWon = false;

            document.body.removeChild(document.getElementById("board"))
            document.body.removeChild(resetButton) // Elimina o botão de reset

            // Verifica se há algum paragrafo sobrando e o remove
            if(document.getElementsByTagName("p").length > 0){
                document.body.removeChild(document.getElementsByTagName("p")[2]);
            }

            posicoes()
        }
    }
}

/* Brincando um pouco e incrementando coisas extras não inclusas na proposta da atividade */

let playerO = document.createElement('p'); // Criação do primeiro jogador
let playerT = document.createElement('p'); // Criação do segundo jogador

// Função chamada caso o usuário deseje jogar sem o nome dos jogadores
function playGameOffline(){

    // Remove o menu inicial
    document.body.removeChild(document.getElementById("formulario"))
    document.body.removeChild(document.getElementsByClassName("initialButton")[1]);
    document.body.removeChild(document.getElementsByClassName("initialButton")[0]);

    menuInitial(); 
    posicoes(); // Cria o tabuleiro do jogo
}

// Função chamada caso haja o nome dos jogadores e seja escolhido jogar com esse modo
function playGameOnline(){
    
    // Verifica se os campos de nome dos jogadores está preenchido antes de iniciar um jogo Online
    if(playerO.innerHTML == ""){
        alert("Digite o nome do player um! ")
    }
    
    if(playerT.innerHTML == ""){
        alert("Digite o nome do player dois! ")
    }
    
    // Caso os nomes estejam preenchidos remove o menu inicial e cria um menuzinho indicando qual player mexe qual peça 
    else if (playerO.innerHTML != "" && playerT.innerHTML != ""){
        document.body.removeChild(document.getElementById("formulario"))
        document.body.removeChild(document.getElementsByClassName("initialButton")[1]);
        document.body.removeChild(document.getElementsByClassName("initialButton")[0]);
        document.body.appendChild(playerO)
        document.body.appendChild(playerT)
        
        menuInitial();
        posicoes(); // Cria o tabuleiro do jogo
    }
    
}

// Cria um menu caso o usuário queira voltar a tela principal
function menuInitial() {
    
    let menu = document.createElement("button");
    menu.id = "menu";
    menu.innerHTML = "menu";
    menu.onclick = () =>{
        resetGame();
        document.body.removeChild(menu);
    }

    document.body.appendChild(menu);
}

// Criação do menu inicial com os campos para os jogadores inserirem os nomes caso desejado
function criacaoMenu(){
    // Criação do formulário
    let form = document.createElement("form");
    form.id = "formulario";

    // Criação do player 1
    let pOne = document.createElement("input");
    pOne.type = "text";
    pOne.value = "";
    pOne.onchange = () =>{
        playerO.innerHTML = event.target.value + " = O";
    };
    pOne.placeholder = "Player 1";

    // Criação do player 2
    let pTwo = document.createElement("input");
    pTwo.type = "text";
    pTwo.value = "";
    pTwo.onchange = () => {
        playerT.innerHTML = event.target.value + " = X";
    }
    pTwo.placeholder = "Player 2";

    form.appendChild(pOne);
    form.appendChild(pTwo);

    // Criação dos botões para decidir se o(s) jogadore(s) preferem com ou sem seus nomes
    let buttonOnline = document.createElement("button");
    buttonOnline.innerHTML = "Jogar com nome!"
    buttonOnline.className = "initialButton";
    buttonOnline.onclick = playGameOnline;

    let buttonOffline = document.createElement("button");
    buttonOffline.innerHTML = "Jogar sem nome!"
    buttonOffline.className = "initialButton";
    buttonOffline.onclick = playGameOffline;

    document.body.appendChild(form);
    document.body.appendChild(buttonOnline);
    document.body.appendChild(buttonOffline);
}

criacaoMenu(); // Função que inicializa o menu de todo o site
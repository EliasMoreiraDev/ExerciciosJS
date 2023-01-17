var valorcasas = []
var valorjogada = 0
function casa(n,v){
    
    var botao = document.getElementsByClassName("div.botao")
    var jogada1 = document.getElementById('jogada1')
    var jogada2 = document.getElementById('jogada2')
    var jogada3 = document.getElementById('jogada3')
    var jogada4 = document.getElementById('jogada4')
    var jogada5 = document.getElementById('jogada5')
    var jogada6 = document.getElementById('jogada6')
    var jogada7 = document.getElementById('jogada7')
    var jogada8 = document.getElementById('jogada8')
    var jogada9 = document.getElementById('jogada9')
     
    
    if(n == 1 && valorjogada == 0){//casa 1 = X
        jogada1.innerHTML = 'x'
        valorcasas[1] = 1
        valorjogada = 1

    }
    else if(n == 1 && valorjogada == 1){//casa 1 = O
        jogada1.innerHTML = 'O'
        valorcasas[1] = 2
        valorjogada = 0
   
    }
    if(n == 2 && valorjogada == 0){//casa 2 = X
        jogada2.innerHTML = 'x'
        valorcasas[2] = 1
        valorjogada = 1
    }
    else if(n == 2 && valorjogada == 1){//casa 2 = O
        jogada2.innerHTML = 'O'
        valorcasas[2] = 2
        valorjogada = 0
    }
    if(n == 3 && valorjogada == 0){//casa 3 = X
        jogada3.innerHTML = 'x'
        valorcasas[3] = 1
        valorjogada = 1
    }
    else if(n == 3 && valorjogada == 1){//casa 3 = O
        jogada3.innerHTML = 'O'
        valorcasas[3] = 2
        valorjogada = 0
    }
    if(n == 4 && valorjogada == 0){//casa 4 = X
        jogada4.innerHTML = 'x'
        valorcasas[4] = 1
        valorjogada = 1
    }
    else if(n == 4 && valorjogada == 1){//casa 4 = O
        jogada4.innerHTML = 'O'
        valorcasas[4] = 2
        valorjogada = 0
    }
    if(n == 5 && valorjogada == 0){//casa 5 = X
        jogada5.innerHTML = 'x'
        valorcasas[5] = 1
        valorjogada = 1
    }
    else if(n == 5 && valorjogada == 1){//casa 5 = O
        jogada5.innerHTML = 'O'
        valorcasas[5] = 2
        valorjogada = 0
    }
    if(n == 6 && valorjogada == 0){//casa 6 = X
        jogada6.innerHTML = 'x'
        valorcasas[6] = 1
        valorjogada = 1
    }
    else if(n == 6 && valorjogada == 1){//casa 6 = O
        jogada6.innerHTML = 'O'
        valorcasas[6] = 2
        valorjogada = 0
    }
    if(n == 7 && valorjogada == 0){//casa 7 = X
        jogada7.innerHTML = 'x'
        valorcasas[7] = 1
        valorjogada = 1
    }
    else if(n == 7 && valorjogada == 1){//casa 7 = O
        jogada7.innerHTML = 'O'
        valorcasas[7] = 2
        valorjogada = 0
    }

    if(n == 8 && valorjogada == 0){//casa 8 = X
        jogada8.innerHTML = 'x'
        valorcasas[8] = 1
        valorjogada = 1
    }
    else if(n == 8 && valorjogada == 1){//casa 8 = O
        jogada8.innerHTML = 'O'
        valorcasas[8] = 2
        valorjogada = 0
    }

    if(n == 9 && valorjogada == 0){//casa 9 = X
        jogada9.innerHTML = 'x'
        valorcasas[9] = 1
        valorjogada = 1
    }
    else if(n == 9 && valorjogada == 1){//casa 9 = O
        jogada9.innerHTML = 'O'
        valorcasas[9] = 2
        valorjogada = 0
    }
    verificarX()

}
function verificarX(){
    var res = document.getElementById('titulo')
    if(valorcasas[1] == 1 && valorcasas[2] == 1 && valorcasas[3] == 1){//linha cima
        res.innerHTML = 'X ganhou'
    }
    if(valorcasas[4] == 1 && valorcasas[5] == 1 && valorcasas[6] == 1){//linha meio
        res.innerHTML = 'X ganhou'
    }
    if(valorcasas[7] == 1 && valorcasas[8] == 1 && valorcasas[9] == 1){//linha baixo
        res.innerHTML = 'X ganhou'
    }
    if(valorcasas[1] == 1 && valorcasas[4] == 1 && valorcasas[7] == 1){// vert esquerda
        res.innerHTML = 'X ganhou'
    }
    if(valorcasas[2] == 1 && valorcasas[5] == 1 && valorcasas[8] == 1){// vert meio
        res.innerHTML = 'X ganhou'
    }
    if(valorcasas[3] == 1 && valorcasas[6] == 1 && valorcasas[9] == 1){// vert direita
        res.innerHTML = 'X ganhou'
    }
    if(valorcasas[1] == 1 && valorcasas[5] == 1 && valorcasas[9] == 1){//diagonal esq/dir
        res.innerHTML = 'X ganhou'
    }
    if(valorcasas[3] == 1 && valorcasas[5] == 1 && valorcasas[7] == 1){//diagonal dir/esq
        res.innerHTML = 'X ganhou'
    }
}
function verificarO(){
    var res = document.getElementById('titulo')
    if(valorcasas[1] == 2 && valorcasas[2] == 2 && valorcasas[3] == 2){//linha cima
        res.innerHTML = 'O ganhou'
    }
    if(valorcasas[4] == 2 && valorcasas[5] == 2 && valorcasas[6] == 2){//linha meio
        res.innerHTML = 'O ganhou'
    }
    if(valorcasas[7] == 2 && valorcasas[8] == 2 && valorcasas[9] == 2){//linha baixo
        res.innerHTML = 'O ganhou'
    }
    if(valorcasas[1] == 2 && valorcasas[4] == 2 && valorcasas[7] == 2){// vert esquerda
        res.innerHTML = 'O ganhou'
    }
    if(valorcasas[2] == 2 && valorcasas[5] == 2 && valorcasas[8] == 2){// vert meio
        res.innerHTML = 'O ganhou'
    }
    if(valorcasas[3] == 2 && valorcasas[6] == 2 && valorcasas[9] == 2){// vert direita
        res.innerHTML = 'O ganhou'
    }
    if(valorcasas[1] == 2 && valorcasas[5] == 2 && valorcasas[9] == 2){//diagonal esq/dir
        res.innerHTML = 'O ganhou'
    }
    if(valorcasas[3] == 2 && valorcasas[5] == 2 && valorcasas[7] == 2){//diagonal dir/esq
        res.innerHTML = 'O ganhou'
    }
}
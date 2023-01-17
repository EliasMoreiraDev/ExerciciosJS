var valorcasas = []
var valorjogada = 0
var reiniciar = document.getElementById('telareiniciar')
var section = document.getElementById('telajogo')
var xvencedor = document.getElementById('xvencedor')
var ovencedor = document.getElementById('ovencedor')

function casa(n,v){
    
    

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
        jogada1.style.background = 'url(imagens/X.png) no-repeat center center'
        
        valorcasas[1] = 1
        valorjogada = 1

    }
    else if(n == 1 && valorjogada == 1){//casa 1 = O
        jogada1.style.background = 'url(imagens/circulo.png) no-repeat center center'
        
        valorcasas[1] = 2
        valorjogada = 0
   
    }
    if(n == 2 && valorjogada == 0){//casa 2 = X
        jogada2.style.background = 'url(imagens/X.png) no-repeat center center'
        
        valorcasas[2] = 1
        valorjogada = 1
    }
    else if(n == 2 && valorjogada == 1){//casa 2 = O
        jogada2.style.background = 'url(imagens/circulo.png) no-repeat center center'
        jogada2.style.backgroundSize = 'cover'
        valorcasas[2] = 2
        valorjogada = 0
    }
    if(n == 3 && valorjogada == 0){//casa 3 = X
        jogada3.style.background = 'url(imagens/X.png) no-repeat center center'
        valorcasas[3] = 1
        valorjogada = 1
    }
    else if(n == 3 && valorjogada == 1){//casa 3 = O
        jogada3.style.background = 'url(imagens/circulo.png) no-repeat center center'
        
        valorcasas[3] = 2
        valorjogada = 0
    }
    if(n == 4 && valorjogada == 0){//casa 4 = X
        jogada4.style.background = 'url(imagens/X.png) no-repeat center center'
        valorcasas[4] = 1
        valorjogada = 1
    }
    else if(n == 4 && valorjogada == 1){//casa 4 = O
        jogada4.style.background = 'url(imagens/circulo.png) no-repeat center center'
        
        valorcasas[4] = 2
        valorjogada = 0
    }
    if(n == 5 && valorjogada == 0){//casa 5 = X
        jogada5.style.background = 'url(imagens/X.png) no-repeat center center'
        valorcasas[5] = 1
        valorjogada = 1
    }
    else if(n == 5 && valorjogada == 1){//casa 5 = O
        jogada5.style.background = 'url(imagens/circulo.png) no-repeat center center'
        
        valorcasas[5] = 2
        valorjogada = 0
    }
    if(n == 6 && valorjogada == 0){//casa 6 = X
        jogada6.style.background = 'url(imagens/X.png) no-repeat center center'
        valorcasas[6] = 1
        valorjogada = 1
    }
    else if(n == 6 && valorjogada == 1){//casa 6 = O
        jogada6.style.background = 'url(imagens/circulo.png) no-repeat center center'
        
        valorcasas[6] = 2
        valorjogada = 0
    }
    if(n == 7 && valorjogada == 0){//casa 7 = X
        jogada7.style.background = 'url(imagens/X.png) no-repeat center center'
        valorcasas[7] = 1
        valorjogada = 1
    }
    else if(n == 7 && valorjogada == 1){//casa 7 = O
        jogada7.style.background = 'url(imagens/circulo.png) no-repeat center center'
        
        valorcasas[7] = 2
        valorjogada = 0
    }

    if(n == 8 && valorjogada == 0){//casa 8 = X
        jogada8.style.background = 'url(imagens/X.png) no-repeat center center'
        valorcasas[8] = 1
        valorjogada = 1
    }
    else if(n == 8 && valorjogada == 1){//casa 8 = O
        jogada8.style.background = 'url(imagens/circulo.png) no-repeat center center'
      
        valorcasas[8] = 2
        valorjogada = 0
    }

    if(n == 9 && valorjogada == 0){//casa 9 = X
        jogada9.style.background = 'url(imagens/X.png) no-repeat center center'
        valorcasas[9] = 1
        valorjogada = 1
    }
    else if(n == 9 && valorjogada == 1){//casa 9 = O
        jogada9.style.background = 'url(imagens/circulo.png) no-repeat center center'
        
        valorcasas[9] = 2
        valorjogada = 0
    }
    
    verificar()

}
function verificar(){
    let lista = ["X", "O"]
    
    for(let i=1; i < 3; i++){
        if(valorcasas[1] == i && valorcasas[2] == i && valorcasas[3] == i){//linha cima
           
        if(i == 1){
            ovencedor.style.display = 'none'
         
        }else if(i == 2){
            xvencedor.style.display = 'none'
        }
        reiniciar.style.display = 'block'
        section.style.display = 'none'
        }
        if(valorcasas[4] == i && valorcasas[5] == i && valorcasas[6] == i){//linha meio
            if(i == 1){
                ovencedor.style.display = 'none'
             
            }else if(i == 2){
                xvencedor.style.display = 'none'
            }
            reiniciar.style.display = 'block'
            section.style.display = 'none'
        }
        if(valorcasas[7] == i && valorcasas[8] == i && valorcasas[9] == i){//linha baixo
            if(i == 1){
                ovencedor.style.display = 'none'
             
            }else if(i == 2){
                xvencedor.style.display = 'none'
            }
            reiniciar.style.display = 'block'
            section.style.display = 'none'
        }
        if(valorcasas[1] == i && valorcasas[4] == i && valorcasas[7] == i){// vert esquerda
            if(i == 1){
                ovencedor.style.display = 'none'
             
            }else if(i == 2){
                xvencedor.style.display = 'none'
            }
            reiniciar.style.display = 'block'
            section.style.display = 'none'
        }
        if(valorcasas[2] == i && valorcasas[5] == i && valorcasas[8] == i){// vert meio
            if(i == 1){
                ovencedor.style.display = 'none'
             
            }else if(i == 2){
                xvencedor.style.display = 'none'
            }
            reiniciar.style.display = 'block'
            section.style.display = 'none'
        }
        if(valorcasas[3] == i && valorcasas[6] == i && valorcasas[9] == i){// vert direita
            if(i == 1){
                ovencedor.style.display = 'none'
             
            }else if(i == 2){
                xvencedor.style.display = 'none'
            }
            reiniciar.style.display = 'block'
            section.style.display = 'none'
        }
        if(valorcasas[1] == i && valorcasas[5] == i && valorcasas[9] == i){//diagonal esq/dir
            if(i == 1){
                ovencedor.style.display = 'none'
             
            }else if(i == 2){
                xvencedor.style.display = 'none'
            }  
            reiniciar.style.display = 'block'
            section.style.display = 'none'
        }
        if(valorcasas[3] == i && valorcasas[5] == i && valorcasas[7] == i){//diagonal dir/esq
            if(i == 1){
                ovencedor.style.display = 'none'
             
            }else if(i == 2){
                xvencedor.style.display = 'none'
            }
            reiniciar.style.display = 'block'
            section.style.display = 'none'
        }
       
    }
}
function recomecar(){
    window.location.reload(true)
}
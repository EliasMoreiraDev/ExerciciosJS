
var botao = document.getElementsByClassName('botao')

var res = document.getElementById('res')


function adicionar(n){   
        res.innerHTML += n
        
}
function limpar(){
        res.innerHTML = ''
    
}
function calcular(){
        var resultado = document.getElementById('res').innerHTML
        res.innerHTML = eval(resultado);
}

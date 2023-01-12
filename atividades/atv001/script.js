        
        
var fundo = window.document.querySelector('body')
var txthora = document.getElementById('txthora')
var img = document.getElementById('imagem')

function horas(){
    var agora = new Date()
    let hora = agora.getHours()
    let min =  agora.getMinutes()
    let sec = agora.getSeconds()

    txthora.innerHTML = `Agora são ${hora}:${min}:${sec} `

    if(hora>1 && hora<12){

        fundo.style.background = 'linear-gradient(to top, #8E1F02, #DFC270)'
        img.style.background = 'url(imagens/manhã.jpg) center center no-repeat'
        img.style.backgroundSize = 'cover'
    }

    if(hora >= 12 && hora < 18){     

        fundo.style.background = 'linear-gradient(to top, #290E06, #762B23)'
        img.style.background = 'url(imagens/tarde.jpg) center center no-repeat'
        img.style.backgroundSize = 'cover'
    }

    if(hora >= 18 && hora < 24){
        
        fundo.style.background = 'linear-gradient(to top, #040E16, #2C4B85)'
        img.style.background = 'url(imagens/noite.jpg) center center no-repeat'
        img.style.backgroundSize = 'cover'
    }
}
function initTime(){
    setInterval(horas,1000);
}
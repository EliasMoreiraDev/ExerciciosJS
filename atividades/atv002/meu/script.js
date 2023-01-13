

function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var txtnasc = document.getElementById('ano')
    var nasc = (txtnasc.value)
    var idade = ano - nasc
    var res = document.getElementById('res')

    if(nasc== 0 || nasc > ano){
        alert('[ERRO] Ano Inválido. Verifique seus dados e tente novamente')
    }else{

        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.getElementById('imagem')
        var main = document.querySelector('main')
        

        if(sexo[0].checked){
            genero = 'Homem'
            main.style.height = '230px'

            if(idade <= 13){
                img.style.backgroundSize = 'cover'
                img.style.backgroundImage = 'url(imagens/homens/criança.jpg)'
                
                
            }
            if(idade > 13 && idade <= 25){
                
                img.style.background = 'url(imagens/homens/jovem.jpg) center center'
                img.style.backgroundSize = 'cover'
            }
            if(idade >= 25 && idade <= 50){
                
                img.style.background = 'url(imagens/homens/adulto.jpg) no-repeat top center'
                img.style.backgroundSize = 'cover'
            }
            if(idade > 50){
                
                img.style.background = 'url(imagens/homens/idoso.jpg) no-repeat center center'
                img.style.backgroundSize = 'cover'
            }
        }
            if(sexo[1].checked){
                main.style.height = '230px'
                genero = 'Mulher'

                if(idade <= 13){
                    
                    img.style.background = 'url(imagens/mulheres/criança.jpg) no-repeat center center'
                    img.style.backgroundSize = 'cover'
                }
                if(idade > 13 && idade <= 25){
                    
                    img.style.background = 'url(imagens/mulheres/jovem.jpg) no-repeat center center'
                    img.style.backgroundSize = 'cover'
                }
                if(idade >= 25 && idade <= 45){
                    
                    img.style.background = 'url(imagens/mulheres/adulto.jpg) no-repeat top center'
                    img.style.backgroundSize = 'cover'
                }
                if(idade > 45){
                    
                    img.style.background = 'url(imagens/mulheres/idoso.jpg) no-repeat center center'
                    img.style.backgroundSize = 'cover'
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos`
    }
    
    
    

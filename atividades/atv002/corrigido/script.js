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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            genero = 'Homem'
            

            if(idade>=0 && idade <= 13){    
                
                img.setAttribute('src','imagens/homens/criancaredondo.png')
                
            }else if(idade > 13 && idade <= 25){

                img.setAttribute('src','imagens/homens/jovemredondo.png')
               
            }else if(idade >= 25 && idade <= 50){

                img.setAttribute('src','imagens/homens/adultoredondo.png')
                
            }else if(idade > 50){

                img.setAttribute('src','imagens/homens/idosoredondo.png')
           
            }
        }
            else if(sexo[1].checked){
                
                if(idade <= 13){

                    img.setAttribute('src','imagens/mulheres/criancaredondo.png')
                        
                }else if(idade > 13 && idade <= 25){

                    img.setAttribute('src','imagens/mulheres/jovemredondo.png')
                                   
                }else if(idade >= 25 && idade <= 45){

                    img.setAttribute('src','imagens/mulheres/adultoredondo.png')
                      
                }else if(idade > 45){

                    img.setAttribute('src','imagens/mulheres/idosoredondo.png')
                                    
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos<br>`
        res.appendChild(img)
    }
var valores = []



function inLista(n , l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){

    var txtnum = document.getElementById('txtnum')
    var num = Number(txtnum.value)
    var lista = document.getElementById('lista')
    var res = document.getElementById('res')

    res.innerHTML = ''

    if(num >= 1 && num <=100 && !inLista(num, valores)){

        var item = document.createElement('option')

        valores.push(num)

        item.text = `Valor ${num} adicionado`

        lista.appendChild(item)
        
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar(){
    var res = document.getElementById('res')
    res.innerHTML = `Ao todo temos ${valores.length} números`
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0

    for (let i in valores) {
        
        soma += valores[i]
        if(valores[i] > maior){
            maior = valores[i]
        }
        else if(valores[i] < menor){
            menor = valores[i]
        }     
    }
    media =  soma/valores.length
    res.innerHTML += `<br>O maior valor informado é ${maior}`
    res.innerHTML += `<br>O menor informado valor é ${menor}`
    res.innerHTML += `<br>A soma dos valores é ${soma}`
    res.innerHTML += `<br>A média de todos os valores é ${media}`
}


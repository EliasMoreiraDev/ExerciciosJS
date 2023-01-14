function calcular() {
    var txtnum = document.getElementById('num')
    var num = Number(txtnum.value)
    var res = document.getElementById('res')
    

    if (num.length == 0) {

        alert('[ERRO] Digite um número para podermos gerarmos a tabuada')

    }
    res.innerHTML = ''
    for (let m = 1; m <= 10; m++) {
       
        let item = document.
        createElement('option')
        item.value = `res.${m}`
        
        item.text += `${num} x ${m} = ${num * m}`

        res.appendChild(item)
    }
}                                                    
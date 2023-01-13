function calcular(){

    var txtinicio = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpasso = document.getElementById('passo')
    var res = document.getElementById('res')

    
    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        alert('[Erro] Sem dados dufucintes para fazer a conta.')
    }else{
        res.innerHTML = 'Contando: '
        var i = Number(txtinicio.value)
        var f = Number(txtfim.value)
        var p = Number(txtpasso.value)
    
        if(i < f){
            for(let c = i; c <= f; c += p){
                if(c < (f-2)){
                res.innerHTML += `${c} , `
                }else if(c == (f-2)){
                    res.innerHTML += '.'
                }
            }
            
        }else{
            for(let c = i; c>=f; c-=p){
                res.innerHTML += `${c} , `
            }
            
        }
        
    }
    
}
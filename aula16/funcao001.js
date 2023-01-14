var num 

function parimp(num) {
    if(num % 2 == 0 ){
        return 'par'
    }else{
        return 'impar'
    }
}
var res = parimp(8)
console.log(res)
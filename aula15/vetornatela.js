var num = [4,1,9,5,7]
num.sort()
/*
for (let i = 0; i < num.length; i++) {    
    console.log(`A posição ${i+1} tem o valor: ${num[i]}`)
}*/

for (let i in num) {
    console.log(`A posição ${i} tem o valor: ${num[i]}`)
}
console.log(`${num}`)
if(num.indexOf(7) == -1){
    console.log('Valor não encontrado')

}else{
    console.log(`O valor 7 está na posição: ${num.indexOf(7)}`)
}


 
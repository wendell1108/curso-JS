let num = [5,2,8,3,7]
num[5]=11
num.push(1)
num.push(4)
console.log(num)
let pos = num.indexOf(3 )
if(pos == -1){
    console.log('o valor nao foi encontrado!')
} else{
    console.log(`o valor esta na posição ${pos}`)
}
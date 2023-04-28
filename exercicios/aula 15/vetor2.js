
let num = [1,2,3,4,5,6,7,8,22,67,55]
/*
for(let pos = 0; pos< num.length;pos++){
    console.log(`a posiçao ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}


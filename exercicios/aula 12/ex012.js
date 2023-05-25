var Agora=new Date()
var hora= Agora.getHours()
let nome = 'wendell'
console.log(`Agora são exatamente ${hora} horas.`)
if(hora<12){
    console.log(`Bom dia! ${nome}`)
} else if(hora<=18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fuano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fuano.value.length ==0 || fuano.value > ano ) {
        window.alert('ERRO!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fuano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade>=0 && idade < 11) {
             //criança
             img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade<25) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if(idade<55){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
            

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade < 11) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
               } else if(idade<25) {
                   //jovem
                   img.setAttribute('src', 'foto-jovem-f.png')
               } else if(idade<50){
                   //adulto
                   img.setAttribute('src', 'foto-adulto-f.png')
               } else{
                   //idoso
                   img.setAttribute('src', 'foto-idoso-f.png')
               }
        }
        res.innerHTML= `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
        
    }


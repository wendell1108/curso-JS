function carregar(){


    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('foto')
    var boa=window.document.getElementById('boa')
    var data= new Date()
    var hora=    data.getHours()
   
    msg.innerHTML=`Agora são ${hora} horas.`
        if(hora >=0 && hora<12) {
        //BOM DIA
        img.src='fotomanha.png'
        document.body.style.background='orange'
        boa.innerHTML='Bom Dia!'
        
        }else if(hora>=12 && hora<18){
        //BOA TARDE
        img.src='fototarde.png'
        document.body.style.background='blue'
        boa.innerHTML='Boa Tarde!'
        

     }else {
        //BOA NOITE
        img.src='fotonoite.png'
        document.body.style.background='black'
        boa.innerHTML='Boa Noite!'
    }
}
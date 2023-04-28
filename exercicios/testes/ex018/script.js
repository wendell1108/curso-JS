let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []
function isNumero(n) {
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else{
        return false
    }

}
function inLista(n,l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    } else{
        return false
    }

}
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else{
        alert('valor inválido ou ja inserido na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('por favor,adicionar valores a lista!')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( let pos in valores) {
            soma += valores[pos]
            if(valores[pos]> maior)
             maior = valores[pos]
            if(valores< menor)
             menor = valores [pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados!!</p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior}!</p>`
        res.innerHTML += `<p> o menor valor informado foi ${menor}!</p>`
        res.innerHTML += `<p> somando os valores obtemos: ${soma}!</p> `
        res.innerHTML += `<p> a média dos valores adicionados é ${media}!</p>`
    }
}
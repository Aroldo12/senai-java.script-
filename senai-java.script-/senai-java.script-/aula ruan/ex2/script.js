function atvd1(){

    let fila = []
    
    
    while(fila.length < 5){
        let opcao = prompt('oque ocorreu na fila\nA)entrou na fila\nB)saiu da fila')
        if(opcao.toUpperCase = 'A'){
        let nome = prompt('qual o nome da pessoa?')
        fila.push(nome)
        }
        else if (opcao.toUpperCase = 'B'){
            fila.shift()
        }
        else{
            alert('opção invalida')
        }

    }
    
    alert(`a fila esta ${fila.join('\n')}`)    
    
}
function atvd2() {

    let anosAlistamento = []
    for(let ano = 2010; ano <= 2019; ano++){
        let houveAlistamento = prompt(`houve alistamento no ano ${ano}?\nS para sim\nN para não`)
        if(houveAlistamento.toLowerCase() == 'S'){
            anosAlistamento.unshift(ano)
        }

    }

    if(anosAlistamento.length = 0){
    alert("não houve alistamento")
 }
 else{
    alert(`ultimo ano de alistamento ${anosAlistamento[0]}`)
 } 
}
function atvd3() {
    let quatidadedeDoencas = Number(prompt('quantas doenças você quer cadastrar?'))
    for(let contador = 0; contador < quatidadedeDoencas; contador++){
        let nome = prompt('qual o nome da doença?')
        let transmissao = prompt('Como ela é transmitida?\nV) Viros\nB) bacteria\nA) ambos')
    }


}
function atvd4(){
    lista
}

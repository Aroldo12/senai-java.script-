function questao1(){

    let idadeFuncionario = Number(prompt('olá digite sua idade')) 

if(idadeFuncionario <= 17){
    alert('você é menor de idade')

}
if(idadeFuncionario <= 59 & idadeFuncionario >= 18){
    alert('Você é adulto')
}
if(idadeFuncionario >= 60){
    alert('Você é idoso')
}
}
function questao2(){

    let perguntaMes = Number(prompt('olá, digite o numero do mês em que estamos para ajustarmos a decoração do app\n1) janeiro\n2) fevereiro\n3) março\n4)abril\n5)maio\n6) junho\n7) julho\n8) agosto\n9) setembro\n10) outubro\n11)novembro\n12)dezembro'))
    
    switch (perguntaMes) {
     case 1:
     case 2:
     case 12:
        alert('estamos no verão')
            
            break;
     case 3:
     case 4:
     case 5:
        alert('estamos no outono')
            
            break;
     case 6:
     case 7:
     case 8:
        alert('estamos no inverno')
            break;
    case 9:
    case 10:
    case 11:
        alert('estamos na primavera')
    
        default:
            alert('digite um numero valido')
            break;
    }

    
}
function questao3(){

    let array = [1, 3, 7, 8, 3, 5, 3, 0]
    let soma = 0
    let array1
    for(let contador = 0; contador <= array.length; contador++){
        array1=array[contador]
        if(array1==3){
            soma+=1
        }
        else{
            soma+=0
        }
        
    }
alert(`a quantidade de vezes que o numero 3 apareceu foi ${soma}`)
}



function questao4(){
    let tarefas = []
    let escolhas 
    let tarefaComum
    let tarefaPrioriataria

    while(escolhas != 6) {
        escolhas = Number(prompt('Lista de tarefas\n1 ) Adicionar uma tarefa comum\n 2 ) Adicionar uma tarefa prioritária\n 3 ) Remover a primeira tarefa\n4 ) Remover a última tarefa\n5 ) encerrar programa\n6 ) lista de tarefas'))

        switch (escolhas) {
            case 1:
                tarefaComum = prompt('escreva a tarefa')
                tarefas.push(tarefaComum)
                
             break;
             case 2 :
                tarefaPrioriataria = prompt('escreva a tarefa')
                tarefas.push(tarefaPrioriataria)
                    
             break;
             
             case 3:
                
                 tarefas.shift()
             break;
             case 4:
                
            tarefas.pop()     
             break;
             case 5:

             break;
             case 6:
               alert(`As tarefas restantes são ${tarefas}`) 
             break;
        
            default:
                alert('digite um numero valido')
                break;
        }
        
       
       
        
     escolhas++
        
        
    }

}
function questao5() {
    let fila = []
    let nome
    
    while(fila.length < 5){

        let opcao = Number(prompt('oque ocorreu na fila\n1) entrou na fila\n2) saiu da fila'))
        switch (opcao) {
            case 1:
                nome = prompt('digite o nome')
                fila.push(nome)
                break;

            case 2:
                fila.shift()
                break;
        
            default:
                alert('opção invalida')
                break;
                
        }
       
            
        console.log(fila)
    
       
    
}
alert(`a fila esta ${fila.join('\n')}`) 
}
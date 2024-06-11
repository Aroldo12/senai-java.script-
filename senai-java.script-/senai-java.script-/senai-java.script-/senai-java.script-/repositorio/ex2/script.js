function bot1(){

    let numeros = []
    let min = -100
    let max = 100
    let saida = document.getElementById('div1')

    for(i=0; i<50; i++){
        let n = Math.floor(Math.random()*(max - min + 1))+ min; 
        numeros.push(n)
    }
    console.log(numeros)
    for(i=0; i<numeros.length;i++){
        saida.innerHTML += numeros[i]+', ' 

    }
    let tamanho = numeros.length
    for(i=0;i<tamanho;i++){
        saida.innerHTML += numeros[1]+', '
    }
    for(i=0;i<numeros.length;i++){
        if(numeros[i] < 0){
           numeros[i] = 0 + ', '
        }
        
    
saida.innerHTML += numeros[i]
    }
    
    }
    function bot2(){
        let mae = []
        let pai = []
        let filho = []
        let min = 10
        let max = 99
        let saida = document.getElementById('div2')

        for(i=0; i<50; i++){
            let n = Math.floor(Math.random()*(max - min + 1)); 
            let n2 = Math.floor(Math.random()*(max - min + 1));
            mae.push(n)
            pai.push(n2)
        }
        console.log(pai)
        console.log(mae)
        
        for(i=0;i<50;i++){
            if(i%2==0){
                filho.push(pai[i])
            }
            else{
                filho.push(mae[i])
            }
            
        }

console.log(filho)
for(i=0;i<50;i++){
    saida.innerHTML += `${i} | ${pai[i]} | ${mae[i]} | ${filho[i]}<br>`
}
    }
    function bot3() {
        
        
    }


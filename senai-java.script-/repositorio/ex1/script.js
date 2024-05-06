function meses() {
    let meses = [, "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    let dias = [, "domingo", "sabado", "sexta", "quinta", "quarta", "terça", "segunda"]

    dias[6] = "melhor dia"
    console.log(dias)

    dias.push("feriado")
    console.log("acrescentando elemento")
    console.log(dias)

    dias.unshift("semana 01")
    console.log("acrescentar elemento no inicio com unshift")
    console.log(dias)


    dias.pop()
    console.log("removendo o elemento do final com'pop'")
    console.log(dias)

    dias.shift()
    console.log("removendo o primeiro elemento com 'shift'")
    console.log(dias)

    dias.concat(['natal', 'ano novo'])
    dias.push(...['natal', 'ano novo'])

    let i = dias.indexOf('terça')
    console.log(`posição no arrays`)
}
function atvd1() {
    let pares = []
    for (cont = 2; cont <= 20; cont++) {
        if (cont % 2 == 0) {
            pares.push(cont)

        }
        console.log(pares)
        pares
    }
}
let numero = []
function atvd2() {



    for (i=0;i<25;i++) {
        let n = Math.ceil(Math.random() * 100)
        numero.push(n)

    }
   console.log(numero)
}

function atvd3() {

    let n

    
}


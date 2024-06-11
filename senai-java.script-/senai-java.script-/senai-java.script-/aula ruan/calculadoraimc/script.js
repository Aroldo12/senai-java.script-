function mostrar(eventoRecebido) {

    eventoRecebido.preventDefault()
    
    

let peso = document.getElementById('#id_peso').value
let altura = document.getElementById('#id_altura').value
let nome = document.getElementById('#id_nome').value
let profissao = document.getElementById('#id_prof').value
let foto = document.querySelector('#id_imagem').value
let paragrafo = document.querySelector("#imagem-result").value
let img = document.querySelector("#imagem-result").value

let imc = 0 

imc = peso / (altura*altura)

let imc2

switch(true){

    case imc<18,5:
    imc2 = "magro"
    break
    case imc>=24.9:
    imc2 = "normal"
    break
    case imc<=39.9:
        imc2 ="obeso"
        break
        default:
             imc2= "muito obeso"










}



paragrafo.textContent = `nome: ${nome.value}<br> IMC: ${imc} - ${imc2}`
Imagem.setAttibute('src', foto.value)


}
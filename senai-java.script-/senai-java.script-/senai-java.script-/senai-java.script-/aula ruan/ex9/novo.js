

let idade = document.querySelector('#id_idade')
let nome = document.querySelector('#id_nome')
let botao = document.querySelector('button')
let paragrafo = document.querySelector('#texto-resultado')

function oi(){
if(idade.value >= 18){
    alert(`parabens ${nome.value} você pode ter um carro`)


}
else{
    alert("boa espertinho você nao tem idade para isso")
}
}
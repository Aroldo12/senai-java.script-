let imagem = document.querySelector('img')
console.log(imagem)

imagem.setAttribute('src' , ' https://st4.depositphotos.com/1004061/29533/i/450/depositphotos_295334000-stock-photo-compact-cars-fleet-studio-garage.jpg')
let idade = document.querySelector('#id_idade')
let nome = document.querySelector('#id_nome')
let botao = document.querySelector('button')

botao.onclick = () => {

    // console.log(idade.value)
    // console.log(nome.value)
    // console.log(botao.value)
    alert(`idade: ${idade.value}\nnome ${nome.value}`)
}

let nomes = []
let imagens = []
let filmes = []
let atuacao = []
let argumentacao = []

const divProtagonistas = document.querySelector('.protaProta')
const div = document.querySelector('.pagina')
div.style.display = 'none'
function exibir() {
    const div = document.querySelector('.pagina')

    div.style.display = 'block'

}

function ocultar() {
    const div = document.querySelector('.pagina')

    div.style.display = 'none'
}

function principal(eventoRecebido) {
    eventoRecebido?.preventDefault()

    const personagem = document.querySelector('#id_personagem').value
    const filme = document.querySelector('#id_filme').value
    const ator = document.querySelector('#id_ator').value
    const descricao = document.querySelector('#id_descricao').value
    const para = document.querySelector('.papa')
    const titulo = document.querySelector('#t2')
    const capa = document.querySelector('#imgM2')
    const img = document.querySelector('#foto').value

    nomes.push(personagem)
    filmes.push(filme)
    atuacao.push(ator)
    argumentacao.push(descricao)
    imagens.push(img)

    localStorage.setItem('nomes', JSON.stringify(nomes))
    // mudar abaixo, trocando por arrays
    localStorage.setItem('Filme', JSON.stringify(filmes))
    localStorage.setItem('ator', JSON.stringify(atuacao))
    localStorage.setItem('descricao', JSON.stringify(argumentacao))
    localStorage.setItem('img', JSON.stringify(imagens))

    // criar uma repetição para fazer innerHTML para cada item das listas
    // LIMPAR A DIV
    divProtagonistas.innerHTML = ` `
    for(let i = 0; i < nomes.length; i++){
        divProtagonistas.innerHTML += `
        <div class="molde1">
            <h1 class="t1">${nomes[i]}</h1>
            <img id="imgM1" src="${imagens[i]}" alt="">
            <h4 class="t1">filme</h4>
            <p>${filmes[i]}</p>
            <h4 class="t1">Ator</h4>
            <p>${atuacao[i]}</p>
            <h4 class="t1">Descrção</h4>
            <p>${argumentacao[i]}</p>
            <button onclick="vaipaputa(${i})">Excluir</button>
        </div>
        `


        // para.innerHTML = `Filme: ${filme} <br> <br> <br> Ator: ${ator} <br> <br> <br> Descricao: ${descricao}`
    }

    // lista.push(teste)
    // localStorage.setItem('nomes', JSON.stringify(nomes1) )
    // lista.push(teste2)
    // localStorage.setItem('nomes', JSON.stringify(filmes) )
    // lista.push(teste3)
    // localStorage.setItem('nomes', JSON.stringify(atuacao) )
    // lista.push(teste4)
    // localStorage.setItem('nomes', JSON.stringify(argumentacao) )


    //    console.log(lista)

    // titulo.textContent = personagem

    // para.innerHTML = `Filme: ${filme} <br> <br> <br> Ator: ${ator} <br> <br> <br> Descricao: ${descricao}`

    // capa.src = img






}
let listaRecuperada = []
// Só realizar o parse se houver dados no armazenamento local
if (localStorage.getItem('nomes')) {
    listaRecuperada = JSON.parse(localStorage.getItem('nomes'))
}
console.log(listaRecuperada)


const teste = localStorage.getItem('nome')
const teste2 = localStorage.getItem('Filme')
const teste3 = localStorage.getItem('Ator')
const teste4 = localStorage.getItem('Descrcao')


function vaipaputa(indio){
indio
}




  















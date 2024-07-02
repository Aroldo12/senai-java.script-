
    const div = document.querySelector('.pagina')
        div.style.display = 'none'
function exibir(){
    const div = document.querySelector('.pagina')

    div.style.display = 'block'

}

function ocultar(){
    const div = document.querySelector('.pagina')

    div.style.display = 'none'
}

function principal(eventoRecebido){
    eventoRecebido?.preventDefault()

    const personagem = document.querySelector('#id_personagem').value
    const filme = document.querySelector('#id_filme').value
    const ator = document.querySelector('#id_ator').value
    const descricao = document.querySelector('#id_descricao').value
    const para = document.querySelector('.papa')
    const titulo = document.querySelector('#t2')
    const capa = document.querySelector('#imgM2')
    const img = document.querySelector('#foto').value

    let nomes1 = []
    let filmes = []
    let atuacao = []
    let argumentacao = []
    
    localStorage.setItem('nome', personagem)
    localStorage.setItem('Filme', filme)
    localStorage.setItem('Ator', ator)
    localStorage.setItem('Descrcao', descricao)

    const teste = localStorage.getItem('nome')
    const teste2 = localStorage.getItem('Filme')
    const teste3 = localStorage.getItem('Ator')
    const teste4 = localStorage.getItem('Descrcao')
    

// lista.push(teste)
// localStorage.setItem('nomes', JSON.stringify(nomes1) )
// lista.push(teste2)
// localStorage.setItem('nomes', JSON.stringify(filmes) )
// lista.push(teste3)
// localStorage.setItem('nomes', JSON.stringify(atuacao) )
// lista.push(teste4)
// localStorage.setItem('nomes', JSON.stringify(argumentacao) )


//    console.log(lista)

titulo.textContent = personagem

   para.innerHTML = `Filme: ${filme} <br> <br> <br> Ator: ${ator} <br> <br> <br> Descricao: ${descricao}`

capa.src = img



   


}
let listaRecuperada = []
// Só realizar o parse se houver dados no armazenamento local
if(localStorage.getItem('nomes')){
listaRecuperada = JSON.parse(localStorage.getItem('nomes'))
}
console.log(listaRecuperada)















    

   
    
    


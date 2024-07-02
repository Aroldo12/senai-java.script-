
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

    let lista = []
    
    localStorage.setItem('nome', personagem)
    localStorage.setItem('Filme', filme)
    localStorage.setItem('Ator', ator)
    localStorage.setItem('Descrcao', descricao)

    const teste = localStorage.getItem('nome')
    const teste2 = localStorage.getItem('Filme')
    const teste3 = localStorage.getItem('Ator')
    const teste4 = localStorage.getItem('Descrcao')
    
// console.log(teste)
// console.log(teste2)
// console.log(teste3)
// console.log(teste4)
lista.push(teste)
localStorage.setItem('nomes', JSON.stringify(lista) )


   console.log(lista)

    


}
let listaRecuperada = []
// Só realizar o parse se houver dados no armazenamento local
if(localStorage.getItem('nomes')){
listaRecuperada = JSON.parse(localStorage.getItem('nomes'))
}
console.log(listaRecuperada)













    

   
    
    


import { verificarNomeExistente } from "./verificaNomeExistente.js"

const inputNome = document.getElementById('input-nome')
const inputEmail = document.getElementById('input-email')
const inputSenha = document.getElementById('input-senha')
const inputRepitaSenha = document.getElementById('repetir-senha')
const btnEnviar = document.getElementById('botao-enviar')
const msgInformacaoVazia = document.querySelectorAll('.msg-inserir__informacao')


function validaEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    if(!inputNome.value.trim() || !inputEmail.value.trim() && !inputSenha.value.trim()) {
        msgInformacaoVazia.forEach(elemento => {
            elemento.style.display = "block"
        });
    } 

    if(!validaEmail(inputEmail.value.trim())){
        alert("Email inválido")
    } else {
        inputEmail.style.borderBottom = '2px solid green'
    }

    const senhaDiferente = document.getElementById('senha-diferente')
    if(inputRepitaSenha.value.trim() !== inputSenha.value.trim()) {
        senhaDiferente.style.display = 'block'
    }

    const descricao = document.getElementById('descricao')
    const infoUsuario = [inputNome.value, inputEmail.value, inputSenha.value, descricao.value]

    enviaDadosParaDB(infoUsuario)
    mostraDescricaoDoUsuario([infoUsuario[0], infoUsuario[1], infoUsuario[3]])
    
 })

 async function enviaDadosParaDB(nomeDoUsuario, senhaDoUsuario, emailDoUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Envia a informação para o banco de dados")
            const deuCerto = true
            if(deuCerto) {
                resolve("Projeto publicado com sucesso")
                console.log(nomeDoUsuario, senhaDoUsuario, emailDoUsuario)
            } else {
                reject("Falha ao publicar o projeto")
            }

        }, 1000)
    })
 }

 async function mostraDescricaoDoUsuario(nomeDoUsuario, emailDoUsuario, descricaoDoUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Mostra a a descrição do usuario")
            const deuCerto = true
            if(deuCerto) {
                resolve("Projeto publicado com sucesso")
                console.log(nomeDoUsuario, emailDoUsuario,  descricaoDoUsuario)
            } else {
                reject("Falha ao publicar o projeto")
            }

        }, 1000)
    })
 }

// const inputs = [inputNome, inputEmail, inputSenha]
// enviaDadosParaDB(inputs)


const ListaNomeEmUsos= ["Xavier4290", "yaay", "duh021"]

async function verificarNomes(nomes) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ListaNomeEmUsos.includes(nomes))
        }, 500)
    })
}



enviaDadosParaDB(verificarNomes(verificarNomeExistente(inputNome)))




import { verificarInputsVazio } from "./verificarInputVazio.js" 

const imgMain = document.getElementById('img-main')
const inputImg = document.getElementById('input-img')


imgMain.addEventListener("click", () => {
    inputImg.click()
})

function lerConteudoDoArquivo(arquivo){
    return new Promise((resolve, reject) => {
        const leitor = new FileReader()
        leitor.onload = () => {
            resolve({
                url: leitor.result,
                nome: arquivo.name
            })
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo}`)
        }

        leitor.readAsDataURL(arquivo)
    })
}

const fotoDePerfil = document.querySelector('.img-main')
const nomeDaImagem = document.querySelector('.nome-da-imagem')

inputImg.addEventListener("change", async(evento) => {
    const arquivo = evento.target.files[0]

    if(arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo)
            fotoDePerfil.src = conteudoDoArquivo.url
        } catch(erro) {
            console.error("Erro na leitura do arquivo")
        }
        
    }
})

const inputTags = document.getElementById('input-tag')
const ulTags = document.getElementById('ul-tags')

const tagsDisponiveis = ["Front-end", "Porgramação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript", "Dark Souls", "Espada"]

async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto)); // Verifica se a tag fornecida (tagTexto) existe dentro da lista de tags disponíveis
        }, 500)
    })
}

inputTags.addEventListener("keypress", async (evento) => {
    if(evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim()
        if(tagTexto !== ""){
            try {
                const tagExite = verificaTagsDisponiveis();
                if(tagExite) {
                     const tagNova = document.createElement('li')
                     tagNova.innerHTML = `<span class="remove-tag">${tagTexto}</span>`
                     ulTags.appendChild(tagNova)
                     inputTags.value = ""
                }
            } catch (error){
                console.error("Tag não encontrada")
                alert("Tag não foi encontrada")
            }
           
        }
    }
})

ulTags.addEventListener("click", (evento) => {
    if(evento.target.classList.contains("remove-tag")) {
        const removeTags = evento.target.parentElement
        ulTags.removeChild(removeTags)
    }
})

const btnSalvar = document.getElementById('btn-salvar')

btnSalvar.addEventListener("click", (evento)=> {
    evento.preventDefault()

    const nomeDoUsuario = document.getElementById('input-nome').value
    const emailDoUsuario  = document.getElementById('input-email').value
    const senhaDoUsuario = document.getElementById('input-senha').value
    const tagsDoFormulario = Array.from(ulTags.querySelectorAll('span')).map((tags) => tags.textContent)

    console.log(nomeDoUsuario, emailDoUsuario, senhaDoUsuario, tagsDoFormulario)
   
})

export async function publicarFormulario(nomeDoUsuario, emailDoUsuario, senhaDoUsuario, tagsDoFormulario) {
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
        const deuCerto = Math.random > 0.5

        if(deuCerto) {
            resolve("Dados do usuário salvo com sucesso")
        } else {
            reject("Falha ao salvar os dados do usuário")
        }
    }, 2000)
   })
}

verificarInputsVazio();

const btnExcluir = document.getElementById('btn-excluir')

btnExcluir.addEventListener("click", (e) => {
    e.preventDefault()

    const forms = document.querySelector(".profile-forms")
    forms.reset();

    fotoDePerfil.src = "./img/profile-icon.webp"
    ulTags.innerHTML = ''
})

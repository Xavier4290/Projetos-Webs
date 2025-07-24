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

inputTags.addEventListener("keypress", (evento) => {
    if(evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim()
        if(tagTexto !== ""){
            const tagNova = document.createElement('li')
            tagNova.innerHTML = `<span class="remove-tag">${tagTexto}</span>`
            ulTags.appendChild(tagNova)
            inputTags.value = ""
        }
    }
})

ulTags.addEventListener("click", (evento) => {
    if(evento.target.classList.contains("remove-tag")) {
        const removeTags = evento.target.parentElement
        ulTags.removeChild(removeTags)
    }
})

const tagDisponiveis = ['Espada', 'Dark Souls', 'Hades']

async function verificarTagsDisponiveis(tagTexto) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(tagDisponiveis.includes(tagTexto))
            }, 1000)
        })
}

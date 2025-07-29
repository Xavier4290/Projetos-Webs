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
})
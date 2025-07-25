const btnSalvar = document.getElementById('btn-salvar')
const inputNome = document.getElementById('input-nome')
const inputEmail = document.getElementById('input-email')
const inputSenha = document.getElementById('input-senha')
const msgInputVazio = document.querySelector('.msg-inputs__vazio')


function validaEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

export function verificarInputsVazio() {
    btnSalvar.addEventListener("click", (evento) => {
    evento.preventDefault();

        if(!inputNome.value.trim()  && !inputEmail.value.trim()  && !inputSenha.value.trim()) {
            msgInputVazio.style.display = "block"
        } 

        if(!validaEmail(inputEmail.value.trim())) {
            alert("Email inválido")
        } else {
            alert("Email válido")
        }

    })
}

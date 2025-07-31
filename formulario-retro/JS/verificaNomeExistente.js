const ListaNomeEmUsos= ["Xavier4290", "yaay", "duh021"]

export function verificarNomeExistente(inputNome) {
        inputNome.addEventListener("keypress", async (e)=> {
        if(e.key === "Enter") {
            e.preventDefault()
            const nomes = inputNome.value.trim()
            if(nomes !== "") {
                try{
                    ListaNomeEmUsos.forEach(elementos => {
                        if(elementos === nomes) {
                            alert("Nome já está em uso. Tente outro nome")
                        }
                    });
                    
                } catch(error) {
                    console.error("Erro ao verificar nome existênte")
                    alert("Erro ao verificar nome existênte. Verifique o console")
                }
            } 
        };  
    })
}


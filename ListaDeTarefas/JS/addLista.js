const lista = document.getElementById("listaTarefa");

function adicionarTarefa(){
    const tarefas = document.getElementById("tarefas").value;
    const novoItem = document.createElement("li");
    novoItem.textContent = tarefas;
    lista.appendChild(novoItem);
}

function removerTarefa(){
    const remover = document.querySelector("#listaTarefa li");
    remover.remove();

}
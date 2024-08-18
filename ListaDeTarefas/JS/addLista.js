const lista = document.getElementById("listaTarefa");

function adicionarTarefa(){
    const tarefas = document.getElementById("tarefas").value;
    const novoItem = document.createElement("li");
    novoItem.textContent = tarefas;
    lista.appendChild(novoItem);
}

function removeTarefa(){
    const deleteTarefa = document.querySelector("#listaTarefa li");
    deleteTarefa.remove();
}
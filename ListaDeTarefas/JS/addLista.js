const lista = document.getElementById("listaTarefa");

function adicionarTarefa(){
    const tarefas = document.getElementById("tarefas").value;
    const novoItem = document.createElement("li");
    novoItem.textContent = tarefas;
    lista.appendChild(novoItem);
}

function removeTarefa(){
    const deletTarefa = document.querySelector("#listaTarefa li");
    deletTarefa.remove();

}
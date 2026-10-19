
function autenticar() {
    var passtrue = "1234";
    var nametrue = "admin";

    var pass = document.getElementById("pass").value;
    var name = document.getElementById("nome").value;
    
    if (pass == passtrue && name == nametrue) {
        alert("Usuario logado");
        window.location.href = "todo.html";
    } else {
        alert("erro");
    }
}



function adicionarTarefa() {
    var input = document.getElementById("tarefa");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    var ul = document.getElementById("taskList");

    var li = document.createElement("li");

    var span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    var editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.onclick = function() {
        var novoTexto = prompt("Edite sua tarefa:", span.textContent);
        if (novoTexto !== null && novoTexto.trim() !== "") {
            span.textContent = novoTexto.trim();
        }
    };
    li.appendChild(editBtn);

    
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteBtn);

    
    ul.appendChild(li);

    
    input.value = "";
}
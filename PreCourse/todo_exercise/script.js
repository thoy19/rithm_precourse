window.onload = function() {
    
    var form = document.getElementById("todoForm");
    var list = document.getElementById("todoList");

    form.addEventListener("submit", function(){
        var newTodo = document.createElement("li");
        newTodo.innerText = document.getElementById("task").value;

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";


        list.appendChild(newTodo);
        newTodo.appendChild(deleteButton);

        form.reset();

    })

    list.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === "li") {
            event.target.style.textDecoration = "line-through";
        } else if (event.target.tagName.toLowerCase() === "button") {
            event.target.parentNode.remove();
        }
    })
}
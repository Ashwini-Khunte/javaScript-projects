const entredTodo = document.querySelector(".todo-entry");
const addTodoBtn = document.querySelector(".addTodoBtn");
const todosContainer = document.querySelector(".todosContainer");
const disable = document.querySelector(".img-uncheaked");
console.log(disable);


addTodoBtn.addEventListener("click", makeTodos)

function makeTodos() {
    let todo = entredTodo.value;

    if(todo === '') {
        alert("You shuld enter a Todo first!!");
    }else {
        let todoList = document.createElement("li");
        todoList.innerHTML = todo;
        todoList.classList.add("img-uncheaked");
        todoList.classList.add("text-uncheaked");
        todosContainer.appendChild(todoList);

        let deleteList = document.createElement("span");
        deleteList.classList.add("delete-icon");
        todoList.appendChild(deleteList);

        entredTodo.value = '';
    }
    
}

todosContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("img-cheacked");
        e.target.classList.toggle("text-cheacked");
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})

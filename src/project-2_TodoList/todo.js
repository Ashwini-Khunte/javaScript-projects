
    const entredTodo = document.querySelector(".todo-entry");
    const addTodoBtn = document.querySelector(".addTodoBtn");
    const todosContainer = document.querySelector(".todosContainer");
    const disable = document.querySelector(".img-uncheaked");
    console.log(disable);

    let storageItems = [] ;


    addTodoBtn.addEventListener("click", makeTodos)

    function makeTodos() {
        let todo = entredTodo.value;

        if(todo.trim() !== '') {
            let todoList = document.createElement("li");
            todoList.innerHTML = todo;
            todoList.classList.add("uncheaked");
            todosContainer.appendChild(todoList);

            let deleteList = document.createElement("span");
            deleteList.classList.add("delete-icon");
            todoList.appendChild(deleteList);

        }else {
            alert("You shuld enter a Todo first!!");
        }

        entredTodo.value = '';
        saveData();
    }

    todosContainer.addEventListener("click", (e) => {
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("cheacked");
            saveData();
        }else if(e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    })
    function saveData() {
            localStorage.setItem('data', todosContainer.innerHTML);
    }
    function getData() {
        todosContainer.innerHTML = localStorage.getItem('data');
    }

    getData();
    // function loadItems() {
    //     const storedItems = localStorage.getItem('storageItems');
    //     if(storedItems) {
    //         storageItems = JSON.parse(storedItems);
    //         storageItems.forEach(items => {
    //             const newItem = document.createElement('li');
    //             newItem.classList.add("uncheaked");
    //             newItem.innerHTML = items;
    //             todosContainer.appendChild(newItem);

    //             let deleteList = document.createElement("span");
    //             deleteList.classList.add("delete-icon");
    //             newItem.appendChild(deleteList);
    //         })
    //     }
    // }

    // loadItems()

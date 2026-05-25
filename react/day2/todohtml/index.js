const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");


// Add Todo
addBtn.addEventListener("click", function () {

      const todoText = todoInput.value.trim();

      if (todoText === "") {
            alert("Please enter a todo");
            return;
      }

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.innerText = todoText;

      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.classList.add("edit-btn");

      editBtn.addEventListener("click", function () {

            const updatedText = prompt(
                  "Edit your todo",
                  span.innerText
            );

            if (updatedText === null || updatedText.trim() === "") {
                  return;
            }

            span.innerText = updatedText.trim();
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.classList.add("delete-btn");

      deleteBtn.addEventListener("click", function () {
            li.remove();
      });

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      todoList.appendChild(li);

      todoInput.value = "";
});
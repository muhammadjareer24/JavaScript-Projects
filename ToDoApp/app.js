const addBtn = document.querySelector("#add-todo-button");
const taskInput = document.querySelector("#todo-input");
const taskList = document.querySelector("#todo-list");

addBtn.addEventListener("click", function () {
  const li = document.createElement("li");

  li.textContent = taskInput.value;
  taskList.appendChild(li);

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  li.appendChild(deleteBtn);

  taskInput.value = "";

  deleteBtn.addEventListener("click", function () {
    console.log(li.textContent);
    taskList.removeChild(li);
  });
});

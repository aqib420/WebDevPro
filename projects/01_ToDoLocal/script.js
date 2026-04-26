const ToDoInput = document.getElementById("todo-input");
const addTaskBTN = document.getElementById("add-task-btn");
const toDoList = document.getElementById("todo-list");

tasks = [];

addTaskBTN.addEventListener("click", () => {
  const taskText = ToDoInput.value.trim();
  if (taskText === "") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  ToDoInput.value = ""; //clearing input value after adding it
  console.log(tasks);
});

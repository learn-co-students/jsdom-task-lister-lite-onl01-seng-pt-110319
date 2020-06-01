document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskUI = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);

});

const createNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description").value;
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription;

  appendNewTask(newTask);
  

};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

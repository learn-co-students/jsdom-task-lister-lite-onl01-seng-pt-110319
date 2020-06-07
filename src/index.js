document.addEventListener("DOMContentLoaded", () => {
 // new task form

  const newTaskForm = document.getElementById("create-task-form"); 
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskUl = document.getElementById("tasks"); //creates ul

  newTaskForm.addEventListener("submit", createNewTask); //listens for "submit"
});

// actual new task

const createNewTask = event => {
  event.preventDefault(); // prevents submit button redirect

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("ul");
  newTask.textContent = newTaskDescription.value;

  appendNewTask(newTask); //appends new task to bottom
  event.target.reset(); //empties form field after submission 
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
document.addEventListener("DOMContentLoaded", () => {
   const taskForm = document.getElementById('create-task-form');
   taskForm.addEventListener("submit", newTask);
  });

  function newTask() {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description');
    const taskList = document.getElementById('tasks');
    const taskForm = document.getElementById('create-task-form');

    newTask = document.createElement("li");
    newTask.innerText = taskDescription.value;
    taskList.appendChild(newTask);
    document.getElementById('new-task-description').value = '';
  }

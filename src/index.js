document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.querySelector("#create-task-form");
  
  newTaskForm.addEventListener('submit', createNewTask);
});

function createNewTask(e){
  e.preventDefault();
  const newTastDescription = document.querySelector('#new-task-description');
  const li = document.createElement('li');
  li.innerText = newTastDescription.value;
  appendLi(li);
  event.target.reset();
};

function appendLi(task) {
  document.querySelector("#tasks").appendChild(task);
};



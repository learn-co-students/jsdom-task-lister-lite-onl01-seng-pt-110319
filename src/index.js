document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.addEventListener('submit', (event) => {
    event.preventDefault();

    addNewTaskToList();
  }
)})

function addNewTaskToList() {
  //grab the text input by the user
  let taskDescription = document.getElementById("new-task-description").value;

  //build the element to display the grabbed text
  let task = document.createElement("p")
  task.id = "task";
  task.innerHTML = taskDescription;

  //grab the list and add the built element to it
  let list = document.getElementById("list")
  list.appendChild(task);

  //clear the input field
  document.getElementById("new-task-description").value = ""
}

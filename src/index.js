document.addEventListener("DOMContentLoaded", () => {
  let newTaskButton= document.getElementById('create-new-task');
  let tasks=document.getElementById("tasks");
  let counter=0;
  let sortHi=document.getElementById("sort_hi")
  let sortLo=document.getElementById("sort_lo")
  let taskList=tasks.getElementsByTagName("li")



  function addNewTask() {
    let newTaskDescription=document.getElementById("new-task-description");
    let newTaskPriority=document.getElementById("priority");
    if (newTaskDescription.value !== "") {
    let newTask = document.createElement("li");
    newTask.setAttribute("id",`task-${counter}`)
    let deleteButton = document.createElement("button");
    deleteButton.innerText= "x";
    newTask.innerText=`${newTaskDescription.value} `;
    switch(newTaskPriority.value) {
      case "High":
      newTask.style.color="red";
      break;
      case "Medium":
      newTask.style.color="orange";
      break;
      case "Low":
      newTask.style.color="green";
      break;
      default:
    }
    newTask.appendChild(deleteButton);
    tasks.appendChild(newTask);
    counter++;
    newTaskDescription.value="";
    newTaskPriority.value="Select priority";
    deleteButton.addEventListener("click",function(){
      this.parentNode.remove()
    })
    }
  }


  newTaskButton.addEventListener("click",function(event) {
    addNewTask();
    event.preventDefault();
  })

 sortHi.addEventListener("click",function () {

 })


});

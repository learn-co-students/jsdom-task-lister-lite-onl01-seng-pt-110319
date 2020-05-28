document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //Assigns the variable to the HTML element by Tag name

  const searchTags = document.getElementsByTagName("input");

//let's add a click event listener to the second element with the 'input' tag name => the Submit button

searchTags[1].addEventListener("click", function(event){

  // prevents the default action of redirect upon submission
  event.preventDefault(); 
  
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  const ul = document.getElementById("tasks");

newTask.innerText = newTaskDescription.value;

ul.appendChild(newTask);

newTaskDescription.value = "";
newTask.style.color = 'blue'
newTask.style.fontSize = '15px';


 }); 
}); 

 


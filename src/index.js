document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  //Assigns the variable to the HTML element by Tag name
  const tags = document.getElementsByTagName("input");
  
  //Adds a click event listener to the soncond element with the 'input' tag name => the Submit button
    tags[1].addEventListener("click", function(event) {
      // prevents the default action of redirect upon submission
        event.preventDefault();
        
        const newTaskDescription = document.getElementById("new-task-description");
        const task = document.createElement("li");
        const ul = document.getElementById("tasks");
        
        task.innerText = newTaskDescription.value;
        ul.appendChild(task);
        newTaskDescription.value = "";
        task.style.color = 'red';
        task.style.fontSize = '20px';
        
        
    });
});

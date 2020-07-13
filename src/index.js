
  // your code here
  const taskForm=document.querySelector("#create-task-form");
  const tasks=document.querySelector("#tasks")
 
  taskForm.addEventListener("submit", function(event){
    event.preventDefault()
    const newTask=document.querySelector("#new-task-description").value
    
    tasks.innerHTML+=`
    <li>${newTask}
    <button data-action="delete"> X</button>
    </li>`
    // const taskCreate=document.createElement("li")
  
    // taskCreate.innerText=newTask
    // tasks.appendChild(taskCreate)
    taskForm.reset()

  });

  tasks.addEventListener("click", function(event){
      if (event.target.dataset.action==="delete"){
        event.target.parentElement.remove()
      }
  });
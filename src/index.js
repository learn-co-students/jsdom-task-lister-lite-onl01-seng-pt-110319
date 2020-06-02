document.addEventListener("DOMContentLoaded", () => {
  // your code here

	document.getElementById("create-task-form").addEventListener("click", toDoList); 

  	function toDoList(event) {
  		const toDoItem = document.getElementById("new-task-description").value;
  		document.getElementById("tasks").innerHTML = toDoItem;
  	}

});

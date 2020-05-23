document.addEventListener("DOMContentLoaded", function () {
  // your code here
  
  const submit = document.getElementsByTagName("input");
  
  
  
  submit[1].addEventListener("click", function(event) {
    event.preventDefault()
    const element = document.getElementById('new-task-description');
    const list = document.createElement('li');
    const taskList = document.getElementById('tasks');

    list.innerText = element.value;
    taskList.appendChild(list);
    element.value = "";
  });


});



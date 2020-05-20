document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    const text = document.getElementById("new-task-description");
    const tag = document.createElement("li");
    const element = document.getElementById("tasks");
    
    tag.innerHTML = text.value;
    element.appendChild(tag);
    text.value = "";
  });
});



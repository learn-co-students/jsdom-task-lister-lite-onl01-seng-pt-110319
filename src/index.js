document.addEventListener("DOMContentLoaded", () => {
    listenForSubmit();
});

function listenForSubmit () {
  let form = document.querySelector('#create-task-form');
  form.addEventListener("submit", function(event) {
    addItemToList();
    event.preventDefault();
  });
}

function addItemToList () {
  let textFieldValue = document.querySelector('#new-task-description').value.trim();

  if (textFieldValue != "") {
    let tasksList = document.querySelector('#tasks');
    let newListItem = document.createElement('li');
    newListItem.innerHTML = textFieldValue;
    tasksList.appendChild(newListItem);
  } else {
    alert("Please enter a new task, and then click enter.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  event.preventDefault();
    document.querySelector("#create-task-form").addEventListener("submit", function(event) {
      document.getElementById("new-task-description").innerHTMl += "sorry! <code>preventDefault()</code> no no no <br>";
      event.preventDefault();}, false);
}


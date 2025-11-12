const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new task element
  const li = document.createElement("li");
  li.textContent = inputBox.value;

  // Create delete icon (span)
  const span = document.createElement("span");
  span.innerHTML = "\u00d7"; // × symbol
  li.appendChild(span);

  // Add to list
  listContainer.appendChild(li);
  inputBox.value = "";

  saveData();
}

// Listen for clicks on the list (for check + delete)
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    // ❌ Delete the entire <li> when span (×) is clicked
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "LI") {
    // ✅ Toggle checked if li is clicked
    e.target.classList.toggle("checked");
    saveData();
  }
});

// Save list to localStorage
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Load tasks on page reload
function showTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    listContainer.innerHTML = saved;
  }
}

// Load tasks on page load
showTasks();
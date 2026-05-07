function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create list item
  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  // Complete button
  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);

  taskInput.value = "";
}
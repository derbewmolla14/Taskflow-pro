let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//day two   UPDATE
// function renderTasks() {
//   const list = document.getElementById("taskList");
//   list.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");

//     li.innerHTML = `
//       ${task}
//       <button onclick="deleteTask(${index})">Delete</button>
//     `;

//     list.appendChild(li);
//   });
// }

// DAY THREE Update app.js

//let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
/*
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value === "") return;

  tasks.push({ text: input.value });
  input.value = "";

  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();


*/


//📅 DAY 4 — Mark Complete
//Update app.js

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span style="text-decoration:${task.done ? 'line-through' : 'none'}">
        ${task.text}
      </span>
      <button onclick="toggleDone(${index})">✔</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value === "") return;

  tasks.push({ text: input.value, done: false });
  input.value = "";

//   function deleteTask(index) {
//   tasks.splice(index, 1);
//   renderTasks();
// }

  renderTasks();
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

/*

📅 DAY 5 — Filter Tasks
Add in HTML
<button onclick="filterTasks('all')">All</button>
<button onclick="filterTasks('done')">Done</button>
<button onclick="filterTasks('todo')">Todo</button>

Update JS
let filter = "all";

function filterTasks(type) {
  filter = type;
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let filtered = tasks;

  if (filter === "done") {
    filtered = tasks.filter(t => t.done);
  } else if (filter === "todo") {
    filtered = tasks.filter(t => !t.done);
  }

  filtered.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span style="text-decoration:${task.done ? 'line-through' : 'none'}">
        ${task.text}
      </span>
      <button onclick="toggleDone(${index})">✔</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

📅 DAY 6 — Dark Mode
Add in HTML
<button onclick="toggleTheme()">🌙</button>

Add CSS
<style>
body.dark {
  background: black;
  color: white;
}
</style>


// JAVASCRIPT
function toggleTheme() {
  document.body.classList.toggle("dark");
}


📅 DAY 7 — Simple Styling Upgrade
Replace HTML style

<style>
body {
  font-family: Arial;
  background: #0f172a;
  color: white;
  text-align: center;
}

input {
  padding: 10px;
}

button {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

li {
  margin: 10px;
}
</style>
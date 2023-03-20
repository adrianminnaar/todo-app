// On form submit add task
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    addTask();
  });

  // On form submit adds a task

  document.querySelectorAll("form").addEventListener("submit", e =>{
    e.preventDefault();
    addTask();
  });

  function loadTask(){
    if(localStorage.getItem("tasks") == null) return;
    
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    // loop through the tasks and add them to the list
    tasks.forEach(task =>{
        const list = document.querySelector("ul");
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? "checked" : ""}>
        <input type="text" value="${task.task}" class="task ${task.completed ? "completed" : ""}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
        <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
  list.insertBefore(li, list.children[0]);
});
    }
  function addTask(){
    const task = document.querySelector("form input");
    const list  = document.querySelector("ul");

    if(task.value === " "){
        alert("Please enter your task!");
        return false;
  
    }

    localStorage.setItem("tasks",JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));
    // create list item, add innerHTML and append to ul
    const li = document.createElement("li");
    li.innerHTML = <input type = "checkbox"
  }


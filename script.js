// --- Sidebar toggle ---
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const mainContent = document.querySelector("main");
toggleBtn.addEventListener("click", ()=>{
  if(sidebar.style.transform==="translateX(-100%)"){
    sidebar.style.transform="translateX(0)";
    mainContent.style.marginLeft="240px";
  } else {
    sidebar.style.transform="translateX(-100%)";
    mainContent.style.marginLeft="0";
  }
});

// --- Stack 1: Tasks ---
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const archiveBtn = document.getElementById("archiveBtn");
const clearBtn = document.getElementById("clearBtn");
const tasksContainer = document.getElementById("tasksContainer");
const promptsContainer = document.getElementById("promptsContainer");
const llmSelect = document.getElementById("llmSelect");
const jsonTextarea = document.getElementById("jsonTextarea");
const sendToStack2Btn = document.getElementById("sendToStack2Btn");

let tasks = JSON.parse(localStorage.getItem("tasks"))||[];

// --- Render tasks ---
function renderTasks(){
  tasksContainer.innerHTML="";
  tasks.forEach((t,i)=>{
    const li = document.createElement("li"); li.className="task-item";
    const span = document.createElement("span"); span.className="task-text"; span.textContent=t.text;
    span.addEventListener("click", ()=>{ t.done=!t.done; li.style.textDecoration=t.done?"line-through":"none"; saveTasks(); });

    const commentUl = document.create

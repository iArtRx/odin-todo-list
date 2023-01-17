import generateToday from "./today";
import generateUpcoming from "./upcoming";
import generateProjects from "./projects";
import generateTags from "./tags";
import { Task, tasks } from "./task";
import { createTaskForm } from "./dashboard";
import format from "date-fns/format";
import isBefore from "date-fns/isBefore";

const menuTabs = {
  "menu-today": generateToday,
  "menu-upcoming": generateUpcoming,
  "menu-projects": generateProjects,
  "menu-tags": generateTags,
};
const menuNavigation = () => {

  const menu = document.querySelector("#menu");

  menu.addEventListener("click", (e) => {
    const menuItem = e.target.closest(".menu-item");
    if (!menuItem) return;
    const tabId = menuItem.getAttribute("id");
    const generateTab = menuTabs[tabId];
    generateTab ? generateTab() : null;
    const currentTab = document.querySelector("#dashboard-content");
    currentTab.setAttribute("data-current-page", tabId);
  });
};

const toggleMenu = (main, menu) => {
  const toggleBtn = document.querySelector("#menu-toggle");

  toggleBtn.addEventListener("click", () => {
    main.classList.toggle("collapsed");
    menu.classList.toggle("collapsed");
  });
};

const addTaskEvent = (main) => {
  const addTaskBtn = document.querySelector("#add-task");
  addTaskBtn.addEventListener("click", () => {
    createTaskForm(main);
  });
};

const submitForm = (taskForm) => {
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dateValue = document.getElementById("due-date").value;
    let dueDate = format(new Date(dateValue), "dd/MM/yyyy");
    let priority = document.getElementById("priority").value;

    let task = new Task(title, description, dueDate, priority);
    tasks.push(task);

    taskForm.style.display = "none";

    const currentTab = document.querySelector("#dashboard-content");
    const tabValue = currentTab.getAttribute("data-current-page");
    console.log("tabValue: ", tabValue);
if (tabValue in menuTabs) {
    console.log("tabValue exists in menuTabs");
    menuTabs[tabValue]();
} else {
    console.log("tabValue does not exist in menuTabs");
}

  });
};




const generateCards = (createTaskCard, tasks) => {
  const content = document.querySelector("#dashboard-content");
  content.innerHTML = " ";

  tasks.sort((a, b) => {
    return isBefore(new Date(a.dueDate), new Date(b.dueDate)) ? -1 : 1;
  });

  for (let task of tasks) {
    let taskCard = createTaskCard(task);
    content.appendChild(taskCard);
  }
};

export {
  menuNavigation,
  toggleMenu,
  addTaskEvent,
  submitForm,
  generateCards,
};

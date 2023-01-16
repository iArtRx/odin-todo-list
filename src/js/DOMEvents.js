import generateToday from "./today";
import generateUpcoming from "./upcoming";
import generateProjects from "./projects";
import generateTags from "./tags";
import { Task, tasks } from "./task";
import { createTaskCard, createTaskForm, updateTasks } from "./dashboard";

const menuNavigation = () => {
    const menuTabs = {
        "menu-today" : generateToday,
        "menu-upcoming" : generateUpcoming,
        "menu-projects" : generateProjects,
        "menu-tags" : generateTags
    }

    const menu = document.querySelector("#menu");

    menu.addEventListener("click", (e) => {
        const menuItem = e.target.closest(".menu-item");
        if (!menuItem) return;
        const tabId = menuItem.getAttribute("id");
        const generateTab = menuTabs[tabId];
        generateTab ? generateTab() : null;
    });
    
}

const toggleMenu = (main, menu) => {
    const toggleBtn = document.querySelector("#menu-toggle");

    toggleBtn.addEventListener("click", () => {
        main.classList.toggle("collapsed");
        menu.classList.toggle("collapsed");
    });
}

const addTaskEvent = (main) => {
    const addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.addEventListener("click", () => {
        createTaskForm(main);
    }); 
}

const submitForm = (taskForm) => {
    taskForm.addEventListener("submit", (e) => {
        
        e.preventDefault()
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let dueDate = document.getElementById("due-date").value;
        let priority = document.getElementById("priority").value;
    
        let task = new Task(title, description, dueDate, priority);
        tasks.push(task);
        updateTasks(createTaskCard);

        taskForm.style.display = "none";
    
    });
}

export { menuNavigation, toggleMenu, addTaskEvent, submitForm };





import { addTaskEvent, submitForm } from "./DOMEvents";
import { tasks } from "./task";

const createDashboard = (main) => {
    const dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");
    main.appendChild(dashboard);

    const createDashboardHeader = (dashboard) => {
        const dashboardHeader = document.createElement("div");
        dashboardHeader.setAttribute("id", "dashboard-header");
        dashboard.appendChild(dashboardHeader);

        dashboard.appendChild(dashboardHeader);  

        const dashboardTitle = document.createElement("h1");
        dashboardTitle.setAttribute("id", "dashboard-title");
        dashboardHeader.appendChild(dashboardTitle)

        const dashboardNav = document.createElement("div");
        dashboardNav.setAttribute("id", "dashboard-nav");
        dashboardHeader.appendChild(dashboardNav)
        
        const addTask = document.createElement("button");
        addTask.setAttribute("id", "add-task");
        addTask.textContent = ("+");
        dashboardNav.appendChild(addTask)
  
    }

    createDashboardHeader(dashboard);

    const dashboardContent = document.createElement("div");
    dashboardContent.setAttribute("id", "dashboard-content");
    dashboard.appendChild(dashboardContent);
}

const createTaskForm = (main) => {
    const dashboardContent = main.querySelector("#dashboard-content");
    const taskForm = document.createElement("form");
    taskForm.classList.add("task-form");

    // Function to map all the attributes of each input
    const createInput = (attributes) => {
        const input = document.createElement("input");
        attributes.forEach((value, key) => {
            input.setAttribute(key, value)
        });
        return input;
    }

    // Match inputs with Task object properties 
    const titleInput = createInput(new Map([
        ["type", "text"],
        ["id", "title"],
        ["placeholder", "Task Title"]
    ]));

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.setAttribute("placeholder", "Task Description");

    const dueDateInput = createInput(new Map([
        ["type", "date"],
        ["id", "due-date"],
    ]));

    // Select option for priority using a Map
    const priorityOptions = ["Low", "Medium", "High"];
    const priorityInput = document.createElement("select");
    priorityInput.setAttribute("id", "priority");
    priorityOptions.map((priority) => {
        let option = document.createElement("option");
        option.value = priority.toLowerCase();
        option.textContent = priority;
        priorityInput.appendChild(option);
    });

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("id", "submit-form");
    submitBtn.setAttribute("type", "does submit");
    submitBtn.textContent = "Add";

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";

    
    // Create array of all input elements then append to task.
    const inputs = [titleInput, descriptionInput, dueDateInput, priorityInput, submitBtn, cancelBtn];
    taskForm.append(...inputs);
        
    dashboardContent.appendChild(taskForm); 
    // Import submit form eventlistener;
    submitForm(taskForm);
}

const createTaskCard = (task) => {
    let taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    let title = document.createElement("h3"); 
    title.textContent = task.title;
    
    let description = document.createElement("p");
    description.textContent = task.description;

    let dueDate = document.createElement("p");
    dueDate.textContent = task.dueDate;

    let priority = document.createElement("p");
    priority.textContent = task.priority;

    const cardInfo = [title, description, dueDate, priority];
    taskCard.append(...cardInfo);
    
    return taskCard;
}

const updateTasks = (createTaskCard) => {
    const content = document.querySelector("#dashboard-content");
    content.innerHTML = " ";

    for (let task of tasks) {
        let taskCard = createTaskCard(task);
        content.appendChild(taskCard);
    }

}

export { createDashboard, createTaskForm, createTaskCard, updateTasks };
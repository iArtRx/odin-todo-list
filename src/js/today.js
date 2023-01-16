import { createTaskCard, updateTasks } from "./dashboard";

const generateToday = () => {
    const pageTitle = document.querySelector("#dashboard-title");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Today";

    updateTasks(createTaskCard);

}

export default generateToday;


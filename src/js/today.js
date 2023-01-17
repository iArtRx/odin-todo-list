import { createTaskCard } from "./dashboard";
import { generateCards } from "./DOMEvents";
import { tasks } from "./task";
import format from "date-fns/format";

const generateToday = () => {

    const pageTitle = document.querySelector("#dashboard-title");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Today";

    const today = format(new Date(), 'dd/MM/yyyy');
    const todayTasks = tasks.filter(task => task.dueDate === today);

    const content = document.querySelector("#dashboard-content");
    content.innerHTML = "";

    generateCards(createTaskCard, todayTasks);
}

export default generateToday;


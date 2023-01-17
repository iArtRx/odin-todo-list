import { createTaskCard } from "./dashboard";
import { generateCards } from "./DOMEvents";
import { tasks } from "./task";
import { isAfter, parse } from "date-fns";

const generateUpcoming = () => {
    const pageTitle = document.querySelector("#dashboard-title");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Upcoming";

    const today = new Date();
    const futureTasks = tasks.filter(task => isAfter(parse(task.dueDate, 'dd/MM/yyyy', new Date()), today));

    const content = document.querySelector("#dashboard-content");
    content.innerHTML = "";

    generateCards(createTaskCard, futureTasks);
}

export default generateUpcoming;
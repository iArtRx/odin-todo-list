import createMenu from "./menu";
import { createDashboard } from "./dashboard";
import { addTaskEvent, toggleMenu } from "./DOMEvents";

const container = document.querySelector(".container");

const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main");
    container.appendChild(main);
    
    return main; 
}

const initialDOM = () => {
    const main = createMain();
    createMenu(main);
    createDashboard(main); 
    toggleMenu(main, menu);
    addTaskEvent(main); 
}

export default initialDOM;
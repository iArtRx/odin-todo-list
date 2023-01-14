import createMenu from "./menu";
import createDashboard from "./dashboard";

const container = document.querySelector(".container");

const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header")
    container.appendChild(header);
}

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
}

export default initialDOM;
import generateToday from "./today";
import generateUpcoming from "./upcoming";
import generateProjects from "./projects";
import generateTags from "./tags";

const menuNavigation = () => {
    const menuTabs = {
        "menu-today" : generateToday,
        "menu-upcoming" : generateUpcoming,
        "menu-projects" : generateProjects,
        "menu-tags" : generateTags
    }

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(menuItem => {
        menuItem.addEventListener("click", e => {
            const tabId = e.target.getAttribute("id");
            const generateTab = menuTabs[tabId];
            generateTab ? generateTab() : null;
        })
    })
}

const toggleMenu = () => {
    const toggleBtn = document.querySelector("#menu-toggle");
    const main = document.querySelector(".main")

    toggleBtn.addEventListener("click", () => {
        main.classList.toggle("collapsed");
    })
};

export { menuNavigation, toggleMenu };





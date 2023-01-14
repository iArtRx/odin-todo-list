const createMenu = (main) => {
    const menu = document.createElement("menu");
    menu.setAttribute("id", "menu");

    // Create menu header to house menu buttons
    const createMenuHeader = (menu) => {
        const menuHeader = document.createElement("div");
        menuHeader.setAttribute("id", "menu-header");
        menu.appendChild(menuHeader);
    
        const hideShow = document.createElement("button");
        hideShow.classList.add("menu-button");
        hideShow.setAttribute("id", "hide-show");
        hideShow.textContent = `Collapse`;
        menuHeader.appendChild(hideShow);
    
        const home = document.createElement("button");
        home.classList.add("menu-button");
        home.setAttribute("id", "home-btn");
        home.textContent = "Home";
        menuHeader.appendChild(home);
    }

    createMenuHeader(menu);

    // An array of menu items
    const menuItems = [
        { name: "Today", id: "menu-today" },
        { name: "Upcoming", id: "menu-upcoming"},
        { name: "Projects", id: "menu-projects" },
        { name: "Tags" , id: "menu-tags" },  
    ]

    // Create a list of menu items.
    for (const menuItem of menuItems) {
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menu-item");
        menuDiv.textContent = menuItem.name;
        menuDiv.setAttribute("id", menuItem.id);
        menu.appendChild(menuDiv);
    }

    main.appendChild(menu);
}

export default createMenu;
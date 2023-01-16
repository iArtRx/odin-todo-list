const req = require.context('../assets', false, /\.png$/);
const menuIcons = req.keys().reduce((acc, item) => {
    acc[item.replace('./', '').replace('.png', '')] = req(item);
    return acc;
}, {});

const createMenu = (main) => {
    const menu = document.createElement("menu");
    menu.setAttribute("id", "menu");

    // An array of menu items
    const menuItems = [
        { id: "menu-toggle", img: menuIcons.menu},
        { name: "Home", id: "menu-home", img: menuIcons.home},
        { name: "Today", id: "menu-today", img: menuIcons.today },
        { name: "Upcoming", id: "menu-upcoming", img: menuIcons.upcoming},
        { name: "Projects", id: "menu-projects", img: menuIcons.projects},
        { name: "Tags" , id: "menu-tags", img: menuIcons.tag },  
    ];
    

    // Create a list of menu items.
    menuItems.forEach(menuItem => {
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menu-item");
        menuDiv.setAttribute("id", menuItem.id);

        const icon = document.createElement("img");
        icon.src = menuItem.img;
        menuDiv.appendChild(icon);

        const name = document.createElement("span");
        name.textContent = menuItem.name;
        menuDiv.appendChild(name); 

        menu.appendChild(menuDiv);
    })

    main.appendChild(menu);
}

export default createMenu;
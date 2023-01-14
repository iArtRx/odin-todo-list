const generateToday = () => {
    const pageTitle = document.querySelector("#dashboard-header");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Today";
}

export default generateToday;
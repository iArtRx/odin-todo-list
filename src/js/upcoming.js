const generateUpcoming = () => {
    const pageTitle = document.querySelector("#dashboard-header");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Upcoming";
}

export default generateUpcoming;
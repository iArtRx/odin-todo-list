const generateUpcoming = () => {
    const pageTitle = document.querySelector("#dashboard-title");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Upcoming";
}

export default generateUpcoming;
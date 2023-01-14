const generateProjects = () => {
    const pageTitle = document.querySelector("#dashboard-header");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Projects";
}

export default generateProjects;
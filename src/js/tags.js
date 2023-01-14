const generateTags = () => {
    const pageTitle = document.querySelector("#dashboard-header");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Tags";
}

export default generateTags;
const generateTags = () => {
    const pageTitle = document.querySelector("#dashboard-title");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Tags";

    const content = document.querySelector("#dashboard-content");
    content.innerHTML = "";
}

export default generateTags;
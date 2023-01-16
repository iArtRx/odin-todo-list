const generateTags = () => {
    const pageTitle = document.querySelector("#dashboard-title");
    pageTitle.innerHTML = "";
    pageTitle.textContent = "Tags";
}

export default generateTags;
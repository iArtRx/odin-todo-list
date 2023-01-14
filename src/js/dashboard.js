const createDashboard = (main) => {
    const dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");
    main.appendChild(dashboard);

    const createDashboardHeader = (dashboard) => {
        const dashboardHeader = document.createElement("div");
        dashboardHeader.setAttribute("id", "dashboard-header");
        dashboard.appendChild(dashboardHeader);
    }

    createDashboardHeader(dashboard);

    const dashboardContent = document.createElement("div");
    dashboardContent.setAttribute("id", "dashboard-content");
    dashboard.appendChild(dashboardContent);
}

export default createDashboard;
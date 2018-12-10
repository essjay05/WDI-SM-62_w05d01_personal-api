// CREATE .json of Documented API Endpoints data to be exported/referenced in '/api'
module.exports = {
    success: true,
    documentation_url: "https://github.com/essjay05/WDI-SM-62_w05d01_personal-api",
    base_url: " ",
    endpoints: [
        {
            method: "GET",
            path: "/api",
            description: "Describes all available endpoints."
        },
        {
            method: "GET",
            path: "/api/profile",
            description: "Brief synopsis of who I (Joy S.) am."
        },
        // PROJECT CRUD-ABLE ROUTES:
        {
            method: "GET",
            path: "/api/projects",
            description: "Index (show) ALL projects."
        },
        {
            method: "GET",
            path: "/api/projects/:id",
            description: "Show one specific project by its ID number."
        },
        {
            method: "POST",
            path: "/api/projects",
            description: "Create a new project."
        },
        {
            method: "PATCH",
            path: "/api/projects/:id",
            description: "Update new object/key/string of project with specified ID number."
        },
        {
            method: "DELETE",
            path: "/api/projects/:id",
            description: "Deletes project with specified ID number."
        }
    ]
}
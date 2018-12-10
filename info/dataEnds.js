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
        }
    ]
}
// REQUIRE IN REFERENCE MODEL(S)
const Project = require('../models/project');

// CREATE CONRTOLS/JAVASCRIPT FUNCTIONS FOR CRUD:

module.exports = {
    index: (req, res) => {
        Project.find({}, (err, projects) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, projects });
        })
    },
    create: (req, res) => {
        Project.create(req.body, (err, newProject) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, newProject });
        })
    }

}
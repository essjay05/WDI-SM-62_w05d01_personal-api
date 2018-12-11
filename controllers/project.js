// REQUIRE IN REFERENCE MODEL(S)
const Project = require('../models/project');

// CREATE CONRTOLS/JAVASCRIPT FUNCTIONS FOR CRUD:

module.exports = {
    // index: (req, res) => {
    //     console.log(req.query);
    //     Project.find({}, (err, projects) => {
    //         if (err) res.json({ success: false, err });
    //         projects.forEach( p => {
    //             console.log(p.name);
    //             if (req.query.name) {
    //                 if (req.query.name.toLowerCase() == p.name.toLowerCase()) {
    //                     console.log("Hi")
    //                 }
    //             }
    //         })
    //         res.json({ success: true, projects });
    //     }).limit(parseInt(req.query))
    // },

    index: (req, res) => {
        
        console.log(req.query);

        Project.find({}, (err, projects) => {
            if (err) res.json({ success: false, err });
            projects.forEach(p => {
            
                console.log(p.name);
                if (req.query.name) {
                    if (req.query.name.toLowerCase() == p.name.toLowerCase()) {
                        console.log("hi")
                        res.json({ success: true, p })
                    }
                    else {
                        res.json({ success: true, projects });
                    }

                } else {
                    res.json({ success: true, projects });        
                }
            });
            res.json({ success: true, projects });
        }).limit(parseInt(req.query.limit));

    show: (req, res) => {
        Project.findById(req.params.id, (err, project) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, project });
        })
    },

    create: (req, res) => {
        Project.create(req.body, (err, newProject) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, newProject });
        })
    },

    update: (req, res) => {
        let { body, params } = req;
        Project.findByIdAndUpdate(params.id, body, { new: true }, (err, updatedProject) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, updatedProject });
        })
    },

    destroy: (req, res) => {
        Project.findByIdAndDelete(req.params.id, (err, deletedProject) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, deletedProject });
        })
    },

    // CRUD STRETCH GOALS:
        // LIMIT PROJECT SEARCH TO TWO:
    index2: (req, res) => {
        Project.find({}, (err, projects) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, projects });
        }).limit(2)
    },

}
// REQUIRE IN MONGOOSE
const mongoose = require('mongoose');

// CREATE MONGOOSE SCHEMA 
const Schema = mongoose.Schema;

// CREATE NEW/TOPIC SCHEMA
const ProjectSchema = new Schema ({
    name: String,
    description: String,
    githubRepoUrl: String,
    deployedUrl: String,
    screenshot: String,
    releaseDate: Date,
})


// CREATE MODEL
const Project = mongoose.model('Project', ProjectSchema);

// MAKE EXPORTABLE
module.exports = Project;
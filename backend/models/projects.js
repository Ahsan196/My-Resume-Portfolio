const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
},
{
  timestamps: false,
});

const Project = mongoose.model('Project', projectsSchema);

module.exports = Project;

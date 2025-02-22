const { Projects } = require("../models");

// Create a new project
const createProject = async (req, res) => {
  try {
    const project = await Projects.create({ ...req.body, isComing: false });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projects.findByPk(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project by ID
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projects.findByPk(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    await project.update(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a project by ID
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projects.findByPk(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    await project.destroy();
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};

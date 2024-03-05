const { createProject, getProject, updateProject, deleteProject } = require('../services/projectService');

module.exports = {
    postCreateProjectAPI: async (req, res) => {
        let result = await createProject(req.body);
        return res.status(200).json({ EC: 0, data: result });
    },
    getProjectsAPI: async (req, res) => {
        let result = await getProject(req.query);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    putUpdateProjectAPI: async (req, res) => {
        let result = await updateProject(req.body);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    deleteProjectAPI: async (req, res) => {
        let result = await deleteProject(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
};

const { createProject, getProject } = require('../services/projectService');

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
};

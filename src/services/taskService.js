const Task = require('../models/task');
const aqp = require('api-query-params');

module.exports = {
    createTask: async (data) => {
        if (data.type === 'EMPTY-TASK') {
            let result = await Task.create(data);
            return result;
        }
        return null;
    },
    getTasks: async (queryString) => {
        const page = queryString.page;
        const {filter, limit} = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        
        let result = await Task.find(filter).skip(offset).limit(limit).exec();
        return result;
    },
    updateTask: async (data) => {
        let result = await Task.updateOne({ _id: data.id }, { ...data });
        return result;
    },
    deleteTask: async (id) => {
        let result = await Task.deleteById(id);
        return result;
    },
};
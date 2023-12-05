const Task = require('../models/task')

module.exports = {

    index: function(req, res){
        const tasks = Task.find({});
        res.render('index', {tasks, title: 'Tasks'})
    }
}
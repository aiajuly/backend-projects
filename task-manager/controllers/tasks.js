const Task = require('../models/task')

module.exports = {

    index: async function(req, res){
        const tasks = await Task.find({});
        res.render('index', {tasks, title: 'Tasks'})
    },
    createTask: async function(req, res){
        const {taskName} = req.body;
        const newTask = new Task({taskName});
        await newTask.save()
        res.redirect('/tasks')
    },
    editForm: async function(req, res){
        const {id} = req.params;
        const foundTask = await Task.findById(id);
        res.render('edit', {foundTask, title: "Edit"})
    },
    editTask: async function(req, res){
        const {id} = req.params;
        const {taskName, completed} = req.body;

        if(completed === 'on'){

            await Task.findByIdAndUpdate(id, {
                taskName: taskName,
                completed: true
            })

        } else {

            await Task.findByIdAndUpdate(id, {
                taskName: taskName,
                completed: false

            })
        }
        res.redirect('/tasks');
    },
    deleteTask: async function(req, res){
        const {id} = req.params;
        await Task.findByIdAndDelete(id);
        res.redirect('/tasks');
    }
}
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, 'Task can not be blank.'],
        max: [20, 'Task can not be too long.']
    },
    completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Task', taskSchema);
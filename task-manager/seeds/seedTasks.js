const mongoose = require('mongoose');
const Task = require('../models/task')
const dbConnection = require('../db/connect');

dbConnection();


const seedTasks = async function(){

    Task.deleteMany({});

    for(let i = 0; i <= 10; i++){
        const task = new Task({
            taskName: 'Testing Task'
        });
        await task.save();
    }

    mongoose.disconnect();
};

seedTasks();
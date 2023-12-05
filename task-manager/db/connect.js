const mongoose = require('mongoose')

module.exports = function(){
    mongoose.connect('mongodb://127.0.0.1:27017/taskManager')
    .then(() => {console.log('Connected - Mongoose')})
    .catch(()=> {console.log('Failed to connect - Mongoose')});
};

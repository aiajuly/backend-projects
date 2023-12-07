const express = require('express');
const router = express.Router();
const taskControllers = require('../controllers/tasks');


router.route('/').get(taskControllers.index).post(taskControllers.createTask);
router.route('/:id/edit').get(taskControllers.editForm);
router.route('/:id').put(taskControllers.editTask).delete(taskControllers.deleteTask);

module.exports = router;





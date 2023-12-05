const express = require('express');
const router = express.Router();
const taskControllers = require('../controllers/tasks');


router.route('/').get(taskControllers.index);


module.exports = router;





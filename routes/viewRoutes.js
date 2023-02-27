const express = require('express');
const viewsControllers = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsControllers.getOverview);
router.get('/tour', viewsControllers.getTour);

module.exports = router;

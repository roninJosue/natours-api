const express = require('express');
const viewsControllers = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', viewsControllers.getOverview);
router.get('/tour/:slug', authController.protect, viewsControllers.getTour);
router.get('/login', viewsControllers.getLoginForm);

module.exports = router;

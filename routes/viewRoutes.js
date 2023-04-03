const express = require('express');
const viewsControllers = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsControllers.getOverview
);
router.get('/tour/:slug', authController.isLoggedIn, viewsControllers.getTour);
router.get('/login', authController.isLoggedIn, viewsControllers.getLoginForm);
router.get('/me', authController.protect, viewsControllers.getAccount);
router.get('/my-tours', authController.protect, viewsControllers.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsControllers.updateUserData
);

module.exports = router;

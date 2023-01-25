const express = require('express');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  )
  .get(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.getAllReviews
  );

module.exports = router;
const catchAsync = require('../utils/catchAsync');
const Review = require('../models/reviewModel');

exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create({ ...req.body, user: req.user._id });
  res.status(201).send({
    status: 'success',
    data: newReview,
  });
});

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();
  res.status(200).send({
    status: 'success',
    results: reviews.length,
    data: { reviews },
  });
});

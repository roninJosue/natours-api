const Tour = require('./../modules/tourModel');

exports.checkBody = (req, res, next) => {
  const {
    body: { name = null, price = null },
  } = req;
  if (!name || !price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    //results: tours.length,
    //data: {
    //  tours,
    //},
  });
};

exports.getTour = (req, res) => {
  const { id = null } = req.params;

  // const tour = tours.find((el) => el.id === +id);

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = (req, res) => {
  res.status(201).send({
    status: 'success',
    // data: {
    //   tour: newTour,
    // },
  });
};

exports.updateTour = (req, res) => {
  const { id = null } = req.params;

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  const { id = null } = req.params;

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

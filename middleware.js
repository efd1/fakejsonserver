module.exports = (req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'Content-Range,X-Total-Count');
  // res.header('Content-Range', '0-9/*');
  res.header('Content-Range', '241');

  // res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.header('X-Total-Count', '241');

  next();
};

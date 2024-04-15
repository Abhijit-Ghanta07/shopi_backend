export const globalErrHandler = (err, req, res, next) => {
  return res.status(err.statusCode).json({
    msg: err.msg || err.message,
    status: "failed",
  });
};

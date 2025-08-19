// middleware/pathlevel.js

function m3(req, res, next) {
  console.log("running middleware 3...");
  return next();
}

function m4(req, res, next) {
  console.log("running middleware 4...");
  return next();
}

module.exports = { m3, m4 };

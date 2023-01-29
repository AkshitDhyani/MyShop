const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("i am there");
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.json("Token is not valid");
      req.user = user;
      next();
    });
  } else {
    return res.json("You are not authenticated");
  }
};

const verifyAndAuthorize = (req, res, next) => {
  console.log("i am here");
  verifyToken(req, res, () => {
    console.log("i am inside");
    if (req.user.id === req.params.id || req.user.isadmin) {
      next();
    } else {
      res.json("You are not allowed");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  console.log("i am here");
  verifyToken(req, res, () => {
    console.log("i am inside");
    if (req.user.isadmin) {
      next();
    } else {
      res.json("You are not allowed");
    }
  });
};

module.exports = { verifyToken, verifyAndAuthorize, verifyTokenAndAdmin };

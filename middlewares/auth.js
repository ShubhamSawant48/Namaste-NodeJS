const adminAuth = (req, res, next) => {
  console.log("admin is getting cheaked");
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).end("unauthorized access!");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("user is getting cheaked");
  const token = "xyzabc";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).end("unauthorized access!");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};

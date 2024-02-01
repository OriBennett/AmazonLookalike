import jwt from "jsonwebtoken";

export const generateToken = ({ _id, name, email }) => {
  return jwt.sign({ _id: _id, name: name, email: email }, process.env.JWT_PW, { expiresIn: "7d" }); //JWT_PW is in .env file
};

export const isAuth = async (req, res, next) => {
  const auth = req.header.authorization
  if (auth) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decode => {
      if (err) res.status(401).send({ message: err.message })
      else {
        req.user = decode;
        next()
      }
    }));

  } else {
    res.status(401).send({ message: "Not authorized, no token" });
  }
};

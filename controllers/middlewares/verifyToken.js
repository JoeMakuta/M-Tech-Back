import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const { TOKEN_SECRET } = process.env;
  try {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const payLoad = jwt.verify(token, TOKEN_SECRET);
      req.user = payLoad;
      console.log("The pyload = ", req.user);
      next();
    } catch (error) {
      res.status(400).json({ message: error.message, error });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

export default verifyToken;

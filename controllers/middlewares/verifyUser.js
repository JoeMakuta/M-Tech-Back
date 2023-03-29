const verifyUser = (req, res, next) => {
  try {
    const { id } = req.params;
    const payLoadUserId = req.user.userId;
    if (id === payLoadUserId) {
      next();
    } else {
      res.status(401).json({ message: "You are not authorized !" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default verifyUser;

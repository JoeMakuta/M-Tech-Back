const notFound = (req, res) => {
  res.status(404).json({ error: "Not found!" });
};

export default notFound;

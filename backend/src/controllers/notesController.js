const getAllNotes = (req, res) => {
  res.status(200).send("Everything good");
};

const createNote = (req, res) => {
  res.status(201).json({ message: "Note created successfully" });
};

const updateNote = (req, res) => {
  res.status(200).json({ message: "Note update successfully" });
};

const deleteNote = (req, res) => {
  res.status(200).json({ message: "Note deleted successfully" });
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};

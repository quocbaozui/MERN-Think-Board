const mongoose = require("mongoose");

// Create a schema
const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamp: true } // createAt, updateAt
);

// Create a model based off that noteSchema
const Note = mongoose.model("Note", noteSchema);

module.exports = Note;

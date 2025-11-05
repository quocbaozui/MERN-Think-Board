import mongoose from "mongoose";
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
  { timestamps: true } // // createAt, updateAt
);

/** @type {import('mongoose').Model} */
const Note = mongoose.model("Note", noteSchema);

export default Note;

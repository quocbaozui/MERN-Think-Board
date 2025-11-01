const express = require("express");
const dotenv = require("dotenv");

const notesRoutes = require("./routes/notesRoutes");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}..`);
});

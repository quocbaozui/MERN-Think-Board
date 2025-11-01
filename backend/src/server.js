const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extends: false }));
app.use("/api/notes", notesRoutes);

app.listen(5000, () => {
  console.log("Server is listening on port 5000..");
});

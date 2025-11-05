import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";

// access environment variable
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}..`);
});

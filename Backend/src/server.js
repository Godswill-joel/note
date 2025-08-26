import express from "express";
import notesRoutes from "./Routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";


dotenv.config();

connectDB()


const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());

app.use("/api/notes", notesRoutes);


app.listen(PORT, () => {
    console.log(`server is running on port https://localhost:${PORT}`);
})
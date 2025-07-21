import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth";
import entryRouter from "./routes/entry";


dotenv.config();

const app = express();

app.use(cookieParser());
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());
app.use("/api/miop-auth", authRouter);
app.use("/api/miop-entry", entryRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));


app.get("/", (_, res) => {
  res.send("API is working");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
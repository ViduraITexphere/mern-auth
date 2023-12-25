import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import path from "path";
dotenv.config();

const __dirname = path.resolve();
const app = express();

app.use(express.json());

// Serve static files from the "../client/dist" directory
app.use(express.static(path.join(__dirname, "/client/dist")));

// Handle all other routes by sending the "index.html" file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

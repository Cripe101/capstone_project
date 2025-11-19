import express from "express";
import cors from "cors";
import 'dotenv/config';
import http from 'http';

import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import eventRoutes from "./routes/event.route.js";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";


// App Config
const app = express()
const PORT = process.env.PORT || 5000
connectDB()
connectCloudinary()


// middlewares
const allowedOrigins = ['http://localhost:5173']
app.use(express.json())
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))


// api endpoints
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/event", eventRoutes);


const server = http.createServer(app)



// error handler
app.use((err, req, res, next) => {
	res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message });
});

// start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
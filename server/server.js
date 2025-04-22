import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/auth.route.js";
import userRoutes from "./src/routes/user.route.js";
import showsRoutes from "./src/routes/show.route.js";
import moviesRoutes from "./src/routes/movie.route.js";
import creationsRoutes from "./src/routes/creations.route.js";
import database from "./src/database/database.js";
import { auth } from "./src/middlewares/auth.middleware.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
  // origin: "*",
  methods: ["GET", "POST"],
}));
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

app.get("/", function (req, res) {
  return res.status(200).json({ payload: `serving requests on port ${PORT}` });
});

app.use("/api/auth", authRoutes);                // auth routes
app.use("/api/user", auth, userRoutes);          // user routes
app.use("/api/movies", moviesRoutes);            // movies routes
app.use("/api/shows", showsRoutes);              // shows routes
app.use("/api/creations", creationsRoutes);      // creations routes

app.listen(PORT, function () {
  database();
  console.log(`application listening on port ${PORT}`);
});
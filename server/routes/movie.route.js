import express from "express";
import { retrieveInfo, movieDetails, bannerMovies } from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/banner-movies", bannerMovies); // movie details
router.get("/:type", retrieveInfo);         // movies shows routes in bunch
router.get("/details/:id", movieDetails);   // movie details

export default router;
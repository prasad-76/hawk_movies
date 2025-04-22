import express from "express";
import { retrieveInfo, seasonDetails, showDetails } from "../controllers/show.controller.js";

const router = express.Router();

router.get("/:type", retrieveInfo);                               // movies shows routes in bunch
router.get("/season-details/:showId/:seasonId", seasonDetails);     // details of a season of a show
router.get("/details/:id", showDetails);                          // details of a show

export default router;
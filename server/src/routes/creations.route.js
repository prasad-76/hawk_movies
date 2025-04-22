import express from "express";
import { discoverCreations, } from "../controllers/creation.controller.js";

const router = express.Router();

router.get("/discover/:endpoint", discoverCreations);

export default router;
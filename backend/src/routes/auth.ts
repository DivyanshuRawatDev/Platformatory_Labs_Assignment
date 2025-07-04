import express from "express";
import { handleGoogleAuth } from "../controllers/Auth";

const router = express.Router();

router.post("/google", handleGoogleAuth);

export default router;

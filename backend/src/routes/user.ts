import express from "express";
import { handleUserEdit } from "../controllers/user.controller";

const router = express.Router();

router.post("/edit", handleUserEdit);

export default router;

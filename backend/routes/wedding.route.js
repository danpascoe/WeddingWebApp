import express from "express";
import { createWedding, deleteWedding, editWedding, getWedding, getWeddings } from "../controllers/weddings.controller.js";

const router = express.Router();

router.get("/", getWeddings);
router.get("/:id", getWedding)
router.post("/", createWedding);
router.put("/:id", editWedding);
router.delete("/:id", deleteWedding)

export default router;
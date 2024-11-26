import express from "express";
import { createGuest, editGuest, getGuest, getGuests } from "../controllers/guests.controller.js";

const router = express.Router();

router.get("/:weddingId", getGuests);
router.get("/guest/:guestId", getGuest)
router.post("/", createGuest);
router.put("/:guestId", editGuest);

export default router;
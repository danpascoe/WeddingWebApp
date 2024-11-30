import express from "express";
import { createGuest, editGuest, getGuest, getGuests, updateGuestStatus } from "../controllers/guests.controller.js";

const router = express.Router();

router.get("/:weddingId", getGuests);
router.get("/guest/:guestId", getGuest)
router.post("/", createGuest);
router.put("/:guestId", editGuest);
router.put("/:guestId/updatestatus/:status", updateGuestStatus);

export default router;
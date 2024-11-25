import express from "express";

export const router = express.Router();

router.get("/", () => { console.log("GET Wedding"); });

router.post("/", () => {});
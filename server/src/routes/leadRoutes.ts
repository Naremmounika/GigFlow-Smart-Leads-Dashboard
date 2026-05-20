import express from "express";

import { createLead, getLeads } from "../controllers/leadController";

const router = express.Router();

router.get("/", getLeads);
router.post("/", createLead);

export default router;
   
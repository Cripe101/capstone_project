import { Router } from "express";
import {
    listEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
} from "../controllers/eventController.js";
import authAdmin from "../middlewares/authAdmin.js";

const router = Router();

// GET /api/event
router.get("/events-list", listEvents);

// GET /api/event/:id
router.get("/events-list/:id", getEvent);

// POST /api/event
router.post("/create-event",authAdmin, createEvent);

// PUT /api/event/:id
router.put("/update-event/:id",authAdmin, updateEvent);

// DELETE /api/event/:id
router.delete("/delete-event/:id",authAdmin, deleteEvent);

export default router;
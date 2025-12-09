import Event from "../models/event.model.js";

// List events (optional pagination)
export const listEvents = async (req, res, next) => {
  try {
    const events = await Event.find().sort({ date: 1 }).lean();
    res.json(events);
  } catch (err) {
    next(err);
  }
};

export const getEvent = async (req, res, next) => {
  try {
    const ev = await Event.findById(req.params.id).lean();
    if (!ev) return res.status(404).json({ message: "Event not found" });
    res.json(ev);
  } catch (err) {
    next(err);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const { title, date, description, image } = req.body;
    if (!title || !date) return res.status(400).json({ message: "title and date are required" });
    const ev = await Event.create({ title, date: new Date(date), description, image });
    res.status(201).json(ev);
  } catch (err) {
    next(err);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const { title, date, description, image } = req.body;
    const ev = await Event.findById(req.params.id);
    if (!ev) return res.status(404).json({ message: "Event not found" });
    if (title !== undefined) ev.title = title;
    if (date !== undefined) ev.date = new Date(date);
    if (description !== undefined) ev.description = description;
    if (image !== undefined) ev.image = image;
    await ev.save();
    res.json(ev);
  } catch (err) {
    next(err);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const ev = await Event.findByIdAndDelete(req.params.id);
    if (!ev) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event deleted" });
  } catch (err) {
    next(err);
  }
};

import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, default: "" },
    image: { type: String, default: null },
  },
  { timestamps: true }
);

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;

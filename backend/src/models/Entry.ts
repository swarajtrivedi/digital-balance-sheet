import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  category: { type: String },
  note: { type: String },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export const Entry = mongoose.model("Entry", entrySchema);
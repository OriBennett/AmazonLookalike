import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    data: {
      _id: { type: Schema.Types.ObjectId, required: true },
      title: { type: String, required: true },
      category: { type: String, required: true },
    },
    user: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Log = mongoose.model("Log", logSchema);

export default Log;

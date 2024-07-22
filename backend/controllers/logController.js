import Log from "../models/Log.js";

const postLogs = async (req, res) => {
  const newLog = new Log({
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
  });
  const Log = await newLog.save();
  res.status(201).send({ message: "Log added successfully", newLog });
};

export default postLogs;

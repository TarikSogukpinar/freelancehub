import mongoose from "mongoose";
import moment from "moment";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    budget: { type: String, required: true },
    location: { type: String, required: true },
    deadline: { type: String, required: true },
    createdAt: {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm:ss a"),
    },
  },
  { timestamps: true, versionKey: false }
);

const Job = new mongoose.model("Job", jobSchema);

export default Job;

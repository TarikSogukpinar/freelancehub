import mongoose from "mongoose";
import moment from "moment";

const profileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    profilePicture: { type: String },
    bio: { type: String },
    location: { type: String },
    skills: { type: String },
    phoneNumber: { type: String },
    portfolio: [
      {
        title: {
          type: String,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
        link: {
          type: String,
          required: false,
        },
      },
    ],
    workHours: [
      {
        day: {
          type: String,
          required: false,
        },
        from: {
          type: String,
          required: false,
        },
        to: {
          type: String,
          required: false,
        },
      },
    ],
    certifications: [
      {
        name: {
          type: String,
          required: false,
        },
        date: {
          type: Date,
          required: false,
        },
        issuer: {
          type: String,
          required: false,
        },
      },
    ],
    linkedin: { type: String },
    instagram: { type: String },
    facebook: { type: String },
    createdAt: {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm:ss a"),
    },
    updatedAt: {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm:ss a"),
    },
  },
  { versionKey: false, timestamps: true }
);

const Profile = new mongoose.model("Profile", profileSchema);

export default Profile;

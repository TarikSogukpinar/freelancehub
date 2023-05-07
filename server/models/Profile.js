import mongoose from "mongoose";
import moment from "moment";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    profilePicture: { type: String },
    title: { type: String },
    bio: { type: String },
    location: { type: String },
    skills: [
      {
        name: String,
      },
    ],
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
        certificationsName: {
          type: String,
          required: false,
        },
        certificationsTopic: {
          type: Date,
          required: false,
        },
        certificationsDate: {
          type: String,
          required: false,
        },
      },
    ],
    education: [
      {
        schoolName: {
          type: String,
          required: false,
        },
        major: {
          type: Date,
          required: false,
        },
        graduatedDate: {
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

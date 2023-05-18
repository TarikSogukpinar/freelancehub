import mongoose from "mongoose";
import moment from "moment";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    profilePicture: { type: String, required: false, default: null },
    title: { type: String, required: false, default: null },
    bio: { type: String, required: false, default: null },
    location: { type: String, required: false, default: null },
    portfolio: [
      {
        title: {
          type: String,
          required: false,
          default: null,
        },
        description: {
          type: String,
          required: false,
          default: null,
        },
        link: {
          type: String,
          required: false,
          default: null,
        },
      },
    ],
    workHours: [
      {
        day: {
          type: String,
          required: false,
          default: null,
        },
        from: {
          type: String,
          required: false,
          default: null,
        },
        to: {
          type: String,
          required: false,
          default: null,
        },
      },
    ],
    certifications: [
      {
        certificationsName: {
          type: String,
          required: false,
          default: null,
        },
        certificationsTopic: {
          type: Date,
          required: false,
          default: null,
        },
        certificationsDate: {
          type: String,
          required: false,
          default: null,
        },
      },
    ],
    education: [
      {
        schoolName: {
          type: String,
          required: false,
          default: null,
        },
        major: {
          type: Date,
          required: false,
          default: null,
        },
        graduatedDate: {
          type: String,
          required: false,
          default: null,
        },
      },
    ],
    linkedin: { type: String, required: false, default: null },
    instagram: { type: String, required: false, default: null },
    facebook: { type: String, required: false, default: null },
    phoneNumber: { type: String, required: false, default: null },
    iban: { type: String, required: false, default: null },
    address: { type: String, required: false, default: null },
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

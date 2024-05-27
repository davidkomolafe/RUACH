const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    imageURL: {
      type: String,
      required: true,
    },

    user_id: {
      type: String,
      required: true,
    },

    email_verified: {
      type: Boolean,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    DOB: {
      type: Date,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    auth_time: {
      type: String,
      required: true,
    },

    likedSongs: {
      type: String,
      default: "",
    },

    likedPlaylists: {
      type: String,
      default: "",
    },

    followedArtists: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

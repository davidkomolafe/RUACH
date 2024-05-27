const mongoose = require("mongoose");

const Playlist = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },

    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },

    songs: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "song",
      },
    ],

    collaborators: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Playlist", Playlist);

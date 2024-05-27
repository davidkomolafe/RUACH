const album = require("../models/playlist");
const song = require("../models/song");

const router = require("express").Router();

// create playlist
router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const user = await User.findById(req.user._id);
  const playlist = await album({ ...req.body, user: user._id }).save();
  user.playlists.push(playlist._id);
  await user.save();

  res.status(201).send({ data: playlist });
});

router.post("/save", async (req, res) => {
  const newAlbum = album({
    name: req.body.name,
    imageURL: req.body.imageURL,
  });
  try {
    const savedAlbum = await newAlbum.save();
    res.status(200).send({ album: savedAlbum });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

// get random playlists
router.get("/random", auth, async (req, res) => {
  const playlists = await playlists.aggregate([{ $sample: { size: 10 } }]);
  res.status(200).send({ data: playlists });
});

// user playlists
router.get("/favourite", auth, async (req, res) => {
  const user = await user.findById(req.user._id);
  const playlists = await playlists.find({ _id: user.playlists });
  res.status(200).send({ data: playlists });
});

router.get("/getAll", async (req, res) => {
  const options = {
    // sort returned documents in ascending order
    sort: { createdAt: 1 },
    // Include only the following
    // projection : {}
  };

  const data = await album.find(options);
  if (data) {
    res.status(200).send({ success: true, song: data });
  } else {
    res.status(400).send({ success: false, msg: "No Data Found" });
  }
});

router.get("/getOne/:getOne", async (req, res) => {
  const filter = { _id: req.params.getOne };

  const data = await album.findOne(filter);
  console.log(data);
  if (data) {
    res.status(200).send({ success: true, song: data });
  } else {
    res.status(400).send({ success: false, msg: "No Data Found" });
  }
});

router.put("/update/:updateId", async (req, res) => {
  const filter = { _id: req.params.updateId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await album.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        desc: req.body.desc,
        imageURL: req.body.imageURL,
      },
      options
    );
    res.status(200).send({ album: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.delete("/delete/:deleteId", async (req, res) => {
  const filter = { _id: req.params.deleteId };

  const result = await album.deleteOne(filter);
  if (result.deletedCount === 1) {
    res.status(200).send({ success: true, msg: "Data Deleted" });
  } else {
    res.status(200).send({ success: false, msg: "Data Not Found" });
  }
});

module.exports = router;

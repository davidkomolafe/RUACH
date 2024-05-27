const artist = require("../models/artist");

const router = require("express").Router();

router.get("/getAll", async (req, res) => {
  const options = {
    // sort returned documents in ascending order
    sort: { createdAt: 1 },
    // Include only the following
    // projection : {}
  };

  const data = await artist.find(options);
  if (data) {
    res.status(200).send({ success: true, song: data });
  } else {
    res.status(400).send({ success: false, msg: "No Data Found" });
  }
});

router.get("/getOne/:getOne", async (req, res) => {
  const filter = { _id: req.params.getOne };

  const data = await artist.findOne(filter);

  if (data) {
    res.status(200).send({ success: true, song: data });
  } else {
    res.status(400).send({ success: false, msg: "No Data Found" });
  }
});

router.post("/save", async (req, res) => {
  const newArtist = artist({
    name: req.body.name,
    bio: req.body.bio,
    imageURL: req.body.imageURL,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    youtube: req.body.youtube,
    twitter: req.body.twitter,
  });
  try {
    const savedArtist = await newArtist.save();
    res.status(200).send({ artist: savedArtist });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.put("/update/:updateId", async (req, res) => {
  const filter = { _id: req.params.updateId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await artist.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        bio: req.body.bio,
        imageURL: req.body.imageURL,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        youtube: req.body.youtube,
        twitter: req.body.twitter,
      },
      options
    );
    res.status(200).send({ artist: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.delete("/delete/:deleteId", async (req, res) => {
  const filter = { _id: req.params.deleteId };

  const result = await artist.deleteOne(filter);
  if (result.deletedCount === 1) {
    res.status(200).send({ success: true, msg: "Data Deleted" });
  } else {
    res.status(400).send({ success: false, msg: "Data Not Found" });
  }
});

module.exports = router;

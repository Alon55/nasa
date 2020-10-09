const express = require('express');
const router = express.Router();
const Favorite = require('../model/StarSchema');


router.post('/favorite', async function (req, res) {
  let data = req.body;
  let newFavorite = new Favorite({
    title: data.title,
    image: data.image,
    description: data.description,
  });
  newFavorite.save();
  res.end();
});

router.get('/favorites', function (req, res) {
    Favorite.find({}, function (err, favorites) {
    res.send(favorites);
  });
});

router.delete('/favorite/:id', function (req, res) {
    const favoriteId = req.params.id;
    Favorite.findOneAndDelete({ _id: favoriteId }, function () {
      res.end();
    });
  });

module.exports = router;

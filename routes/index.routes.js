const router = require("express").Router();
const ParkService = require('../services/parks.services')
// const Parks = require('../models/Park.model')

const hikingApi = new ParkService()

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/parks", (req,res,next) => {
  hikingApi.getParks()
  .then(foundParks => {
    console.log('DATA for getting parks',foundParks.data.data)
    res.json({message: 'GET parks worked', parks: foundParks.data.data})
  })
  .catch(err => console.log('Error getting parks data:', err))
})

router.get("/parks/:parkCode", (req,res,next) => {
  const {parkCode} = req.params
  console.log(parkCode)
  hikingApi.getSingleItem(parkCode)
  .then(foundPark => {
    console.log('DATA for getting single item:', foundPark)
    res.json({message: 'GET single park worked', park: foundPark.data.data})
  })
  .catch(err => console.log('Error finding single park:', err))
})

module.exports = router;

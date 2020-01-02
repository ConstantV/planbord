const express = require('express');
const router = express.Router();
const planning = require('../db/planning');

//info Table =Planning
router.get('/', (req, res) => {
  console.log('Planning opgevraagd');
  planning.getAllPlanning(function(err, data) {
    console.log(err);
    if (!err) {
      res.send(data);
    } else {
      res.send('' + err); // ! Hoe kan dit anders???
    }
  });
});

module.exports = router;

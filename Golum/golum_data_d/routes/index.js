var express = require('express');
var router = express.Router();
const golumUgly = require ('../golum_data');
/* GET home page. */
router.get('/', (req, res,)=> {
  res.render('index', { title: 'Golum Express', golumUgly: golumUgly });
});

module.exports = router;

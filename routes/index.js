var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next){
   return res.render("index.html");
});
module.exports = router;

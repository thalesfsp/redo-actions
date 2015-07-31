/**
 * @author Thales Pinheiro
 * @since 07/31/2015
 * @copyright Thales Pinheiro
 * Static content routes
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Redo' });
});

module.exports = router;

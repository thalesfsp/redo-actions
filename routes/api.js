/**
 * @author Thales Pinheiro
 * @since 07/31/2015
 * @copyright Thales Pinheiro
 * Action API
 */

var express = require('express');
var router = express.Router();

/* GET home page. */

// return entry points
router.get('/', function(req, res, next) {
  res.status(200).send('Welcome to our API!');
});

// return list of saved actions
router.get('/actions', function(req, res, next) {
  res.status(200).json([{a:1, b:2}, {a:5, b:34}]);
});

// return a specific list of saved actions
router.get('/action', function(req, res, next) {
  res.status(200).json({a:1, b:2});
});

// save one action list
router.post('/action', function(req, res, next) {
  res.status(200).send('Saved');
});

module.exports = router;

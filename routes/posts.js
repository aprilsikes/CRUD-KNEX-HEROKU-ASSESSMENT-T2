var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Posts() {
  return knex('posts');
}

router.get('/', function (req, res, next) {
  Posts().select().then(function (posts) {
    res.json({'SUCCESS': posts });
  });
});

router.post('/', function (req, res, next) {

  var thePost = {
    author:req.params.author,
    body:req.params.body
  }

  Posts().insert(thePost).then(function (posts) {
    res.redirect('/');
  });
});

router.get('/:id', function (req, res, next) {
  Posts().where('id', (req.params.id)).first().then(function (posts) {
    res.json({'SUCCESS': posts});
  });
});

router.get('/:id/edit', function (req, res, next) {
  
})

module.exports = router;

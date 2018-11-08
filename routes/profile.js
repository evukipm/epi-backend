const express = require('express');
const router = express.Router();

const User = require('../models/user');

const { isLoggedIn } = require('../helpers/middlewares');

//GET PROFILE VIEW
router.get('/:id', isLoggedIn, (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then(user => {
      return res.json(user);
    })
    .catch(error => {
      return res.json(error);
    } );
});


//PUT EDIT PROFILE VIEW
router.put('/:id', isLoggedIn, (req, res)=> {
  const userId = req.params.id;
  const user = req.body;
  User.findByIdAndUpdate(userId, user)
    .then(user => {
      return res.json(user);
    })
    .catch(error => {
      return res.json(error);
    });
  });


//DELETE PROFILE BACKLOG



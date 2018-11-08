const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

const { isLoggedIn } = require('../helpers/middlewares');

router.get('/:id', isLoggedIn, (req, res, next) => {
  const userId = res.locals.currentUser._id;
  User.findById(userId)
    .then(user => {
      return res.render('')
    })
})
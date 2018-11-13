const express = require('express');

const router = express.Router();

const User = require('../models/user');
const Post = require('../models/post');


router.get('/', (req, res, next) => {
  // recoge las dos querys, tipo y búsqueda
  const searchType = req.query.type;
  const searchValue = req.query.class;

  // según el tipo, user, título o descripcion, realiza una u otra petición
  // a la base de datos.
  // el $regex devuelve match si incluye la cadena a buscar
  // sin necesidad de tener que poner en la búsqueda el título completo
  // Título del post: Tortilla de patatas, búsqueda: illa
  // daría true

  if (searchType === 'user') {
    User.find({ username: { $regex: searchValue, $options: 'i' } })
      .then(user => res.json(user))
      .catch(() => res.json('No results'));
  } else if (searchType === 'title') {
    Post.find({ title: { $regex: searchValue, $options: 'i' } })
      .populate('author')
      .then(post => res.json(post))
      .catch(() => res.json('No results'));
  } else if (searchType === 'text') {
    Post.find({ text: { $regex: searchValue, $options: 'i' } })
      .populate('author')
      .then(post => res.json(post))
      .catch(() => res.json('No results'));
  } else {
    res.json('No results');
  }
});

module.exports = router;

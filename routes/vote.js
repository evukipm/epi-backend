const express = require('express');
const mongoose = require('mongoose');

const Steps = require('../models/step');
const Post = require('../models/post');

const ObjectId = mongoose.Types.ObjectId;
const router = express.Router();

router.put('/:id', (req, res) => {
  // const id = req.params.id;
  // const body = req.params.body;

  const id = req.params.id;
  const steps = req.body.steps;
  const stepId = ObjectId(req.body.stepId);
  const index = req.params.index;


  Post.finById(id)
    .then((post) => {
      const steps = post.steps;
      steps.filter((item) => {
        console.log(item);
        return item._id === stepId;
      });
    });


  // Post.findById(id)
  //   .populate('steps')
  //   .then((steps) => {
  //     if (stepId._id === stepId) {
  //       // Steps.findByIdAndUpdate(stepId, {});
  //     }
  //   })
  //   .then((error) => {
  //   });

  // const stepId = ObjectId(req.body.steps._id);
  // console.log(stepId);


  // const stepId = ObjectId(req.body.steps.id);
  // const idStep = ObjectId(req.body.steps.id);
  // console.log('El body: ', body);
  // Post.findById(id)
  //   .then(() => {
  //     // res.json(list);
  //   })
  //   .catch((error) => {
  //     res.json(error);
  //   });
});

module.exports = router;

import express from 'express';
import userCtrl from '../controllers/user.controller';
import User from '../models/user.model';

const router = express.Router();

router
  .route('/login')
  .post((req, res, next) => {
  console.log(333, req.body)
    User.find({ email: req.body.email }).then((user) => {
      console.log(111, user.toAuthJSON());
      res.json(user.toAuthJSON());
    });
  })
  .post((req, res, next) => {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });

    user
      .save()
      .then(savedUser => res.json(savedUser.toAuthJSON()))
      .catch(e => next(e));
  });

export default router;

import express from 'express';
import userCtrl from '../controllers/user.controller';
import User from '../models/user.model';

const router = express.Router();

router.route('/login')
  .post((req, res, next) => {

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

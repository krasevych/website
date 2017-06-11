import User from '../models/user.model';

function create(req, res, next) {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user.save()
    .then(savedUser => res.json(savedUser.toObject()))
    .catch(e => next(e));
}

export default { create };

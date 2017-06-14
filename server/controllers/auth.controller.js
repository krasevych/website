import User from '../models/user.model';

function login({ body: { email } }, res, next) {
  User.findOne({ email }).then(user => {
    res.json(user.toAuthJSON());
  });
}

export default { login };

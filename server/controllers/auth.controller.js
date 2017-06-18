import httpStatus from 'http-status';
import User from '../models/user.model';
import APIError from '../helpers/APIError';

function login({ body: { email, password } }, res, next) {
  User.findOne({ email }).then(user => {
    user
      .validPassword(password)
      .then(() => {
        res.json(user.toAuthJSON());
      })
      .catch(() => {
        const err = new APIError(
          'Authentication error',
          httpStatus.UNAUTHORIZED,
        );
        next(err);
      });
  });
}

export default { login };

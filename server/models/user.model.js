import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from '../configs/config';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      minlength: 6,
      require: true,
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', function(next) {
  if (!(this.isModified('password') || this.isNew)) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      this.password = hash;
      return next();
    });
  });
});

class User {
  validPassword(pw) {
    return new Promise((resolve, reject) =>
      bcrypt.compare(pw, this.password, (err, isMatch) => {
        if (err || !isMatch) {
          return reject(err);
        }

        return resolve();
      }),
    );
  }

  generateGWT() {
    return jwt.sign(
      {
        email: this.email,
      },
      config.jwtSecret,
      {
        expiresIn: '60 days',
      },
    );
  }

  toAuthJSON() {
    return {
      id: this._id,
      createdAt: this.createdAt,
      email: this.email,
      token: this.generateGWT(),
    };
  }
}

UserSchema.loadClass(User);

export default mongoose.model('User', UserSchema);

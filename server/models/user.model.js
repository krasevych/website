import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
  }
}, { timestamps: true });

UserSchema.pre('save', function (next) {
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
  comparePassword(pw, cb) {
    bcrypt.compare(pw, this.password, (err, isMatch) => {
      if (err) {
        cb(err);
      }

      cb(null, isMatch);
    });
  }

  toAuthJSON() {
    return {
      email: this.email,
    };
  }
}

UserSchema.loadClass(User);

export default mongoose.model('User', UserSchema);

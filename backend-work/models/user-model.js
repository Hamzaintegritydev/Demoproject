const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },

  isAdmin: {
    type: Boolean,
    default: false
  },
  // user_type: {
  //   type: String,
  //   // enum: ['admin', 'user'],
  //   // required: true,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
//   companies: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Company',
//     },
//   ],
});
const Users = new mongoose.model("users", UserSchema);
module.exports = Users;
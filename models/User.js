const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "You must enter a username!",
      trim: true,
    },
    email: {
      type: String,
      required: "You must enter an email!",
      unique: true,
      match: [/.+@.+\..+/],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//VIRTUALS GO HERE
//NOTE: modified from model/Pizza.js in pizza-hunt. ask for verification on accuracy
// UserSchema.virtual("friendCount").get(function () {
//   return this.friends.reduce(
//     (total, User) => total + this.friends.length + 1,
//     0
//   );
// });

const User = model("User", UserSchema);

module.exports = User;

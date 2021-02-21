const { Schema, model, Types } = require('mongoose');

const CommentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    thoughts: [],
    friends: []
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

CommentSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;
const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    replies: [replySchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('replyCount').get(function() {
  return this.replies.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
const { Schema } = require('mongoose');

const replySchema = new Schema(
  {
    replyBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = replySchema;
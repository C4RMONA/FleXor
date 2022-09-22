const Post = require("../models");

const resolvers = {
  Query: {
    posts: async(parent, {username}) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({_id: -1});
    }
  }
};

module.exports = resolvers;
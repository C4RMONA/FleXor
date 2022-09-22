const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  posts: [Post]
  friends: [User]
}

type Post {
  _id: ID
  postText: String
  username: String
  replyCount: Int
  replies: [Reply]
}

type Reply {
  _id: ID
  reactionBody: String
  username: String
}

type Query {
  users: [User]
  user: (username: String!): User
  posts(username: String): [Post]
  
}
`;

module.exports = typeDefs
const { ApolloServer, gql } = require("apollo-server-express");

const User = require("./models/user.model");
const Post = require("./models/post.model");
const Profile = require("./models/profile.model");
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    posts: [Post]
    user(id: Int!): User
    post(id: Int!): Post
    profile(id: Int!): Profile
  }
  
  type User {
    id: Int!
    name: String
    email: String
    posts: [Post]
    profile: Profile
  }

  type Post {
    id: Int!
    title: String
    content: String
    createdAt: String
    published: Int
    author: User
  }

  type Profile {
    id: Int!
    bio: String
    user: User
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    posts: () => Post.find(),
    user: (_, { id }) => User.findOne({ id }),
    post: (_, { id }) => Post.findOne({ id }),
    profile: (_, { id }) => Profile.findOne({ id }),
  },
  User: {
    posts: (author) => Post.find({ authorId: author.id }),
    profile: (user) => Profile.findOne({ userId: user.id }),
  },

  Post: {
    author: (post) => User.findOne({ id: post.authorId }),
    createdAt: (post) => new Date(post.createdAt).toISOString()
  },

  Profile: {
    user: (profile) => User.findOne({ id: profile.userId }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
module.exports = server;

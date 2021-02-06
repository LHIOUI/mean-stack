const { ApolloServer, gql } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');

const db = require('./db');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  scalar Date
  type Query {
    users: [User]
  }
  type User {
    firstname: String
    lastname: String
    email: String
    birth_date: Date!
  }
`;

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return new Date(value).toUTCString()
  }
});
// Provide resolver functions for your schema fields
const resolvers = {
  Date: dateScalar,
  Query: {
    users: () => db.getAllUsers(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
module.exports = server;
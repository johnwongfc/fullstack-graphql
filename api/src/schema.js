const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createAt: String!
    name: String!
    type: String!
  }

  type Query {
    pets: [Pet]!
  }
`;

module.exports = typeDefs

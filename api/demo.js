const { ApolloServer } = require('apollo-server-express');
const gql = require('graphql-tag');

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User!
  }
`;

const resolvers = {
  Query: {
    me() {
      return {
        email: 'yoda@master.com',
        avatar: 'http://yoda.png',
        friends: [],
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000, () => console.log('on port 4000'));

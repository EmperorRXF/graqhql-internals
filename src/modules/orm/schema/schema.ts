import gql from 'gql-tag';

export const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
  }

  type Query {
    getUser(id: String!): User!
    getAllUsers: [User]!
  }

  type Mutation {
    addUser(name: String!, email: String): User!
    updateUser(id: String!, name: String, email: String): User!
    deleteUser(id: String!): User!
  }
`;

import { graphql, buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    getGreeting: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  getGreeting: () => {
    return `Hello World!`;
  },
};

// The client GraphQL query
const query = `
  query MyFirstQuery {
    getGreeting
  }
`;

// Run the GraphQL query and print out the response
export const executeBasicQuery = async (): Promise<void> => {
  const response = await graphql(schema, query, root);
  console.log(response);
};

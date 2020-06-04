import { graphql, buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    getGreeting(name: String): String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  getGreeting: (input: any) => {
    return `Hello World! - ${input.name}`;
  },
};

// The client GraphQL query
const query = `
  query MyFirstQuery {
    q1: getGreeting(name: "Ruwan")
    q2: getGreeting(name: "Ruwan Fernando")
  }
`;

// Run the GraphQL query and print out the response
export const executeBasicQuery = async (): Promise<void> => {
  const response = await graphql(schema, query, root);
  console.log(response);
};

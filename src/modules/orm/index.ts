import { Application } from 'express';
import { createConnection, Repository } from 'typeorm';

import { ApolloServer } from 'apollo-server-express';
import { User } from './entity/user';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolvers/user-resolver';

export let userRepository: Repository<User>;

export const ormStartup = async (app: Application): Promise<void> => {
  try {
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });

    const connection = await createConnection();
    userRepository = connection.getRepository(User);
  } catch (error) {
    console.log(error);
  }
};

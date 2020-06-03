import { ApolloServer } from 'apollo-server-express';
import { Application } from 'express';
import { createConnection, Repository } from 'typeorm';

import { getLogger } from '../../common';
import { User } from './entity/user';
import { resolvers } from './resolvers/user-resolver';
import { typeDefs } from './schema/schema';

const logger = getLogger('bootstrap');

export let userRepository: Repository<User>;

export const ormStartup = async (app: Application): Promise<void> => {
  try {
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });

    const connection = await createConnection();
    userRepository = connection.getRepository(User);
  } catch (error) {
    logger.error('An unhandled exception occured', {
      error,
    });
  }
};

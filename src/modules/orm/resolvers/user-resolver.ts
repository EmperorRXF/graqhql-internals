/* eslint-disable @typescript-eslint/no-explicit-any */
import { userRepository } from '../';
import { User } from '../entity/User';

export const resolvers = {
  Query: {
    getUser: async (_: any, args: any): Promise<User> => {
      const { id } = args;

      return userRepository.findOne({ where: { id: id } });
    },

    getAllUsers: async (): Promise<User[]> => {
      return userRepository.find();
    },
  },

  Mutation: {
    addUser: async (_: any, args: any): Promise<User> => {
      const { name, email } = args;

      const user = new User();
      user.name = name;
      user.email = email;

      const savedUser = await userRepository.save(user);

      return savedUser;
    },
  },
};

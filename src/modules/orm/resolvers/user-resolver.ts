/* eslint-disable @typescript-eslint/no-explicit-any */
import { userRepository } from '../';
import { User } from '../entity/User';

export const resolvers = {
  Query: {
    getUser: async (_: any, args: any): Promise<User> => {
      const { id } = args;

      return userRepository.findOne({ where: { id: id } });
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

    // deleteUser: async (_: any, args: any): Promise<User> => {
    //   const { id } = args;

    //   const userToDelete = await userRepository.findOne({ where: { id: id } });

    //   await userRepository.delete(userToDelete);

    //   return userToDelete;
    // },

    // updateUser: async (_: any, args: any): Promise<User> => {
    //   const { id, name, email } = args;

    //   const userToUpdate = await userRepository.findOne({ where: { id: id } });
    //   userToUpdate.name = name ?? userToUpdate.name;
    //   userToUpdate.email = email ?? userToUpdate.email;

    //   const updatedUser = await userRepository.save(userToUpdate);

    //   return updatedUser;
    // },
  },
};

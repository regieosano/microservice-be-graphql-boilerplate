import { GraphQLFieldResolver } from "graphql";
import { User } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { getAllUsers } from "@src/service/userService";

export const getAllUsersQuery: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<User[]> => {
  const users = await getAllUsers();
  return users;
};

export default getAllUsersQuery;

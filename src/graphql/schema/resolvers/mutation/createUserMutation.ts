import { GraphQLFieldResolver } from "graphql";
import { User } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { createUser } from "@src/service/userService";

export const createUserMutation: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { name, email, password } },
  _context,
  _info
): Promise<User> => {
  return createUser(name, email, password);
};

export default createUserMutation;

import { GraphQLFieldResolver } from "graphql";
import { User } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { modifyUser } from "@src/service/userService";

export const modifyUserMutation: GraphQLFieldResolver<
	unknown,
	IApolloServerContext
> = async (
	_source,
  { input: { id, name, email, password } },
  _context,
  _info
): Promise<User> => {
  return modifyUser(id, name, email, password);
};

export default modifyUserMutation;
import { GraphQLFieldResolver } from "graphql";
import { User } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { deleteUser } from "@src/service/userService";

export const deleteUserMutation: GraphQLFieldResolver<
	unknown,
	IApolloServerContext
> = async (_source, { input: { id } },_context,	_info): Promise<User> => {
	const deletedUser = await deleteUser(id);
	return deletedUser;
};

export default deleteUserMutation;



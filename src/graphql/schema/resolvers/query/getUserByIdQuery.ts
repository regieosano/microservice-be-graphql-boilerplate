import { GraphQLFieldResolver } from "graphql";
import { User } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { getUserById } from "@src/service/userService";

export const getUserByIdQuery: GraphQLFieldResolver<
	unknown,
	IApolloServerContext
> = async (
	_source,
	{ input: { id } },
	_context,
	_info
): Promise<User> => {
    const user = await getUserById(id);
		if (!user) {
			throw new Error(`No user found for id: ${id}`);
		}
    return user;
};

export default getUserByIdQuery;
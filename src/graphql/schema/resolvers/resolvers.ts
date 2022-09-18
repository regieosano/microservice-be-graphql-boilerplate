import { GraphQLResolverMap } from "apollo-graphql";
import { User } from "@prisma/client";
import { getUserById } from "@src/service/userService"; 
import mutation from "@src/graphql/schema/resolvers/mutation/mutation";
import query from "@src/graphql/schema/resolvers/query/query";

interface IUserReference {
  __typename: "User";
  id: string;
}

const resolvers: GraphQLResolverMap<unknown> = {
  Query: query,
  Mutation: mutation,
  User: { 
    __resolveReference: async (
      ref: IUserReference
    ): Promise<User | null> => {
      return getUserById(parseInt(ref.id))
    }
  }
};

export default resolvers;

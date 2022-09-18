import { Resolvers } from "@src/graphql/generated/graphql";
import { getAllUsersQuery } from "@src/graphql/schema/resolvers/query/getAllUsersQuery";
import { getUserByIdQuery } from "@src/graphql/schema/resolvers/query/getUserByIdQuery";

const query: Resolvers = {
  users: {
    resolve: getAllUsersQuery,
  },
  user: {
    resolve: getUserByIdQuery,
  }
 
};

export default query;

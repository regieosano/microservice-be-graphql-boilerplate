import { Resolvers } from "@src/graphql/generated/graphql";
import { createUserMutation } from "@src/graphql/schema/resolvers/mutation/createUserMutation";
import { modifyUserMutation } from "@src/graphql/schema/resolvers/mutation/modifyUserMutation";
import { deleteUserMutation } from "@src/graphql/schema/resolvers/mutation/deleteUserMutation";

const mutation: Resolvers = {
  createUser: {
    resolve: createUserMutation,
  },
  modifyUser: {
    resolve: modifyUserMutation,
  },
  deleteUser: {
    resolve: deleteUserMutation,
  }
};

export default mutation;

import { buildSubgraphSchema } from "@apollo/subgraph";
import typeDefs from "@src/graphql/schema/typedefs/typedefs";
import resolvers from "@src/graphql/schema/resolvers/resolvers";

const schema = buildSubgraphSchema({
  typeDefs,
  resolvers,
});

export default schema;
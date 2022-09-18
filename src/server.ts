import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from  "apollo-server-core";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import subGraphSchema from "@src/graphql/schema/schema";
import { performAstCodegen } from "@src/codegen";
import prisma from "@src/prisma/client";


const startServer = async () => {
	performAstCodegen();

	const context: IApolloServerContext = {
		prisma,
	}

	 // Instantiate the apollo server
  const server = new ApolloServer({
		context,
  	schema: subGraphSchema,
    cors: {
	  	origin: "*",
	  	credentials: true,
	  },
  	csrfPrevention: true, 
  	introspection: true,
	  plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false, embed: true })] 
  });


  // Start the server
  server
 	  .listen(process.env.PORT || 4001)
   	.then(({ url }) => {
 	 	   // eslint-disable-next-line no-console
   		 console.log(`'🚀 Server ready @ ${url}`);
    })
	  .catch((error) => {
	     // eslint-disable-next-line no-console
 		   console.log(`There was an error - ${error}`);
   });
}

startServer();



	






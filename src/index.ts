import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { MessageResolver } from "./resolvers/MessageResolver";

const main = async () => {
  try {
    const app = express();
    app.use(
      express.urlencoded({
        extended: true,
      })
    );

    app.use(express.json());

    const schema = await buildSchema({
      resolvers: [MessageResolver],
      validate: false,
    });

    const apolloServer = new ApolloServer({
      schema,
    });

    apolloServer.applyMiddleware({ app });

    const PORT = 3999;

    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

main();

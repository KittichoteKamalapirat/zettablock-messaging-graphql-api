"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const MessageResolver_1 = require("./resolvers/MessageResolver");
const main = async () => {
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.urlencoded({
            extended: true,
        }));
        app.use(express_1.default.json());
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [MessageResolver_1.MessageResolver],
            validate: false,
        });
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema,
        });
        apolloServer.applyMiddleware({ app });
        const PORT = 3999;
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
main();
//# sourceMappingURL=index.js.map
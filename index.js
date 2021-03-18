const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const app = express();
const server = new ApolloServer({});

server.applyMiddleware({ app });

module.exports = app;

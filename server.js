/* - App Initialization - */
import { buildSchema } from 'graphql';

const palVersion = require('./package.json').version;
const cluster = require('cluster');
const express = require('express');
const graphqlHTTP = require('express-graphql');

export default function startServer() {
  // Construct a schema, using GraphQL schema language
  const schema = buildSchema(`
    type Query {
      hello: String
    }
  `);

  // The root provides a resolver function for each API endpoint
  const root = {
    hello: () => 'Hello world!',
  };

  const app = express();
  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }));
  app.listen(4000);
  console.log('Running a GraphQL API server at localhost:4000/graphql');
};

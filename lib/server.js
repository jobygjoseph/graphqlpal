/* - App Initialization - */
import { buildSchema } from 'graphql';

const palVersion = require('../package.json').version;
const cluster = require('cluster');
const express = require('express');
const graphqlHTTP = require('express-graphql');

export default function startServer() {
  let server = null;
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

  app.get('/', (req, res) => res.status(200).json({
    'ramen-pal': palVersion,
    node: process.version,
    sha1: process.lastCommit,
  }));

  app.use((req, res) => {
    res.status(404);
    res.send({ status: 404, message: 'not found' });
  });
  server = app.listen(process.env.PORT || 4000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Running Ramen PAL server at http://${host}:${port}`);
  });
}

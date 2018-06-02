'use strict';
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./src/graphql/schema');
const { typeDefinitions } = require('./src/graphql/schema/typeDefinitions');

const PORT = process.env.port || 4000;

const server = express();

server.use(cors());
server.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

server.get('/', (request, response) => {
  response.redirect('/graphql');
});

server.get('/typeDefinitions', (request, response) => {
  response.send({ typeDefinitions });
});

server.listen(PORT, () =>
  console.log(`Server started. Listening on port ${PORT}.`)
);

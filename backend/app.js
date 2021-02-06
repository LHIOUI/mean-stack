// app.js
const express = require('express');

const http = require('http');
const bodyParser = require('body-parser');
// api.js for the routes
const api = require('./api');
const serverGraphql = require('./graphql-server');
const app = express();
// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// all routes are falling back into api.js
app.use('/', api);
// HTTP port setting
const port = process.env.PORT || '3000';
app.set('port', port);
serverGraphql.applyMiddleware({ app });
// HTTP server creation
const server = http.createServer(app);
// listening all incoming requests on the set port
server.listen(port, () => console.log(
    `backend running on port:${port}`,
    `graphql running at http://localhost:${port}${serverGraphql.graphqlPath}`)
);
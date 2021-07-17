var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello(name:String!): String
    work:String
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  hello: args => {
    return `Hello world!${args.name}  `;
  },
  work: ()=>{
      return 'i am working from home'
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from '../graphql';
const app = express();

//GraphQL server route
app.use('/graphql', graphqlHTTP(req => ({
    schema, 
    pretty: true,
    graphiql: true
})));


mongoose.connect('mongodb://mongo:27017/amiidb');

const server = app.listen(8080, () => {
   console.log('Listening at post', server.address().port); 
});
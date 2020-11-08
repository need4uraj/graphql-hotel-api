import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers/index';
import db from './db';
import typeDefs from './schemas/schema.graphql';

const PORT = process.env.PORT || 3000;
const hostname = 'localhost';

//using apollo server for creating GraphQL server instane, we can also use express-graphql
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        db: db // passing db (test data) as context to be used across all the resolvers
    },
    playground: {
        endpoint: `http://${hostname}:${PORT}/api/graphql`
    }
})
server.listen(PORT, console.log(`Server is up & listening at port ${PORT}`))
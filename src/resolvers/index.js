import Query from './query';
import Mutation from './mutation';

/* index.js is one global resolver consolidating all the required resolvers, easy to maintain & import */

const resolvers = {
    Query,
    Mutation
}
export {resolvers as default}
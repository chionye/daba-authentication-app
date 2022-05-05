const {GraphQLSchema, GraphQLObjectType} = require('graphql');
const getData = require('./queries/');
const user = require('./mutations/');

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        getUsers: getData.GET_USER
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        createUser: user.CREATE_USER
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
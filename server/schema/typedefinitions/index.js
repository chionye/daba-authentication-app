const {GraphQLObjectType, GraphQLID, GraphQLString} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'user',
    fields:{
        main_id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        bio: {type: GraphQLString},
        phone: {type: GraphQLString}
    }
});
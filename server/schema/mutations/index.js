const type_definition = require('../typedefinitions/');
const {GraphQLString} = require('graphql');
const {} = require('../../model/user.model');

module.exports = {
    CREATE_USER:{
        type: type_definition,
        args:{
            name:{type: GraphQLString},
            email:{type: GraphQLString},
            password:{type: GraphQLString},
            phone:{type: GraphQLString}
        },
        resolve(parent, args){
            return "test";
        }
    }
}
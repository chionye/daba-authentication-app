const type_definition = require('../typedefinitions/');
const {GraphQLList} = require('graphql');

module.exports = {
    GET_USER:{
        type: new GraphQLList(type_definition),
        resolve(){
            return "hello";
        }
    }
}
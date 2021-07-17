const graphql = require('graphql');
const _ = require('lodash')
const {GraphQLObjectType, GraphQLString,GraphQLSchema} = graphql;

var books  = [
    {name:'Nome of the wind',genre:'Fantasy',id:'1'},
    {name:'the final empire',genre:'Fantasy',id:'2'},
    {name:'The long Earth',genre:'Sci-Fi',id:'3'}
]



const BookType = new GraphQLObjectType({
    name:'book',
    fields:() =>{{
        id:{type:GraphQLString}
        name:{type:GraphQLString}
        genre:{type:GraphQLString}

    }}
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                // code to get data from db / other services
            return _.find(books,{id:args[id]});
        }
    }
}
})


module.exports = new GraphQLSchema({
    query:RootQuery 
})
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const graphqlExpress = require('graphql-server-express').graphqlExpress
const graphiqlExpress = require('graphql-server-express').graphiqlExpress

const schema = require('./schema').schema

const GraphQLServer = express().use('*',cors())

GraphQLServer.get('/healtf', (req,res)=>{
    res.sendStatus(200)
})

GraphQLServer.use('/graphiql', graphiqlExpress({
    endpointURL: 'graphql'
}))

GraphQLServer.use(
    '/',
    bodyParser.json(),
    graphqlExpress({schema})
)

GraphQLServer.listen(3000, () => {
    console.log(`Graphql Server listening on port 3000`)
})
const express = require('express'),
app = express(),
cors = require('cors');
const schema = require('./schema/');
const {graphqlHTTP} = require('express-graphql');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.urlencoded({extended: true}));

// app.use('/api/v1/users', userController);

app.listen(process.env.PORT || 5667, () => console.log(`running`));
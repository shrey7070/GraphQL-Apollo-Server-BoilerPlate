const { ApolloServer } = require("apollo-server-express")
const express = require("express")
const connectDB = require("./database/db")

const typeDefs = require("./schema/employeeSchema")
const resolvers = require("./resolvers/employeeResolver")

// Create an Express app
const app = express()

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers })

// Start the Apollo Server
server.start().then(async () => {
  // Connect with database
  await connectDB()

  // Apply the Apollo Server middleware to the Express app
  server.applyMiddleware({ app })

  // Set the port for the Express app to listen on
  const port = 4000

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/graphql`)
  })
})

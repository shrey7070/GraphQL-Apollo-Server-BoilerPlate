const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    age: Int!
    department: String!
  }

  input EmployeeInput {
    id: ID!
    name: String
    age: Int
    department: String
  }

  type Query {
    getEmployees: [Employee!]!
  }

  type Mutation {
    addEmployee(name: String!, age: Int!, department: String!): Employee!
    updateEmployee(input: EmployeeInput!): Employee!
    deleteEmployee(id: ID!): Employee!
  }
`

module.exports = typeDefs

const Employee = require("../models/employeeModel")

const resolvers = {
  Query: {
    getEmployees: async () => {
      try {
        const employees = await Employee.find()
        return employees
      } catch (error) {
        console.error("Error retrieving employees", error)
        throw error
      }
    },
  },
  Mutation: {
    addEmployee: async (parent, args) => {
      console.log(parent)
      console.log(args)
      try {
        const newEmployee = new Employee({
          name: args.name,
          age: args.age,
          department: args.department,
        })
        const savedEmployee = await newEmployee.save()
        return savedEmployee
      } catch (error) {
        console.error("Error adding employee", error)
        throw error
      }
    },
    updateEmployee: async (parent, args) => {
      try {
        const { id, ...updateData } = args.input
        const updatedEmployee = await Employee.findByIdAndUpdate(
          id,
          updateData,
          { new: true }
        )
        return updatedEmployee
      } catch (error) {
        console.error("Error updating employee", error)
        throw error
      }
    },
    deleteEmployee: async (parent, args) => {
      try {
        const id = args.id
        const deleteEmployee = Employee.findByIdAndDelete(id)
        return deleteEmployee
      } catch (error) {
        console.error("Error deleting employee", error)
        throw error
      }
    },
  },
}

module.exports = resolvers

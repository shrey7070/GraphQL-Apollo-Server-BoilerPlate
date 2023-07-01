var mongoose = require("mongoose")

var mongoDB = "mongodb://127.0.0.1/test-employee"

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Error connecting to MongoDB", error)
    throw error
  }
}

module.exports = connectDB

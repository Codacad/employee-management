const mongoose = require("mongoose");
async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log(
      `DB connection is successfully established on host ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = dbConnection;

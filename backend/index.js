const express = require('express')
const cors = require('cors')
const dbConection = require('./utils/db_connection')
require('dotenv').config()


const app = express()

dbConection()
app.use(express.urlencoded({extended:false}))
app.use(cors())
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
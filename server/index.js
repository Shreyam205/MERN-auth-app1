require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connection = require("./db")
const userRouted = require("./routes/users")
const authRoutes = require('./routes/auth')

return connection()

app.use(express.json())
app.use(cors())

app.use("./api/users", userRoutes)
app.use("./api/auth", authRoutes)

const port = process.env.PORT||8080
app.listen(port, ()=>{
    console.log(`Listen on port ${port}...`)
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(3000)

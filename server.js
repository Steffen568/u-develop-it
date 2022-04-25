const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const mysql = require('mysql2')

// middlewear
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// connecting to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //  Your mysql username
        user: 'root',
        // your mysql password
        password: 'Htchc568!',
        database: 'election'
    },
    console.log('connected to election database')
)

// db objecting using query method running sql and executes callback with all resulting rows
db.query(`SELECT * FROM canidates`, (err, rows) => {
    console.log(rows)
})

// default response for any other requests
app.use((req, res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
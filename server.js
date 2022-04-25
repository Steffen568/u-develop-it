const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

// middlewear
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// sends get request, displays hello world on browser
app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

// default response for any other requests
app.use((req, res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
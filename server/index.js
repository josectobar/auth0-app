const express = require("express")
require("dotenv").config()

const app = express()

app.get("/public", function(req, res) {
  res.json({
    message: "Public API"
  })
})

app.listen(3001)
console.log(`API server on ${process.env.REACT_APP_API_URL}`)

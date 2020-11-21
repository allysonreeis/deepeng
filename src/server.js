const express = require('express')
const server = express()

function mainPage (req, res) {
  return res.sendFile(__dirname + "/views/index.html")
}

function tablePage (req, res) {
  return res.sendFile(__dirname + "/views/table.html")
}

server.use(express.static("public"))
.get("/", mainPage)
.get("/table", tablePage)
.listen(3000)
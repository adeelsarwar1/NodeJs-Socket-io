const express = require('express')
const app = express()
const http = require('http')
const cors = require("cors")
const {Server} = require("socket.io")
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
cors:{
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
}
})

io.on("connection", (socket)=>{
    console.log(`User Connected: ${socket.id}`)

    socket.on("join_room", (data)=>{
        socket.join(data)
        console.log(`User Connected with id ${socket.id} & Room Id : ${data}`)
    })

    socket.on("disconnected", ()=>
    {
        console.og("USER IS DISCONNECTED :( ")
    })
})

server.listen(3001,()=>{
    console.log("SERVER IS RUNNING HURRAY :)")
})
const express =require("express");
const http = require("http");
const cors = require("cors");
const socketIO =require('socket.io');
const app =express();
const server=http.createServer(app);

app.use(cors());


app.use(express.json());
const io =new socketIO.Server(server,{
    cors:{
        origin:"http://127.0.0.1:5500"
    }
});

app.get("/",(req,res)=>{
    res.json({
        msg:"Hello World"
    });
});

io.on("connection",(socket)=>{
    console.log("Connection created");
    socket.on("message",(payload)=>{
        console.log("Payload",payload);
        // io.emit('new-message',payload);
        io.except(socket.id).emit('new-message',payload);

    })
});

server.listen(5000, ()=>{
    console.log("App started on port 5000")
});
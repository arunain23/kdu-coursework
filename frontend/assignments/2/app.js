const express = require('express');
const path =require('path');
const http = require("http");
const cors = require("cors");
const socketIO =require('socket.io');
const logger =require('./middleware/Logger');
const app= express();
const server=http.createServer(app);
const users =require('./Users');
app.use(cors());
app.use(logger);



const messageDB = {};

const addNewMessage = (hash, message) => {
    if(!messageDB[hash]){
        messageDB[hash] = [];
    }
    messageDB[hash].push(message);
    console.log("hash: ", hash, " mdb: ", messageDB);
}
const getMessages = (hash) => {
    console.log("hash: ", hash, " mdb: ", messageDB);
    if(messageDB[hash]){
        return messageDB[hash];
    }
    return [];
}

module.exports = {messageDB, addNewMessage, getMessages};

let loggedInUser = [];

function removeLoggedInUser(userId){
    loggedInUser = loggedInUser.filter(({id}) => userId !== id);
}

function addLoggedInUser(userId){
    const user = users.find(({id}) => id == userId);
    removeLoggedInUser(userId);
    loggedInUser.push(user);
    loggedInUser = loggedInUser.filter((u, index, db) => {
        const duplicateIndex = db.map(({id}) => id).indexOf(u.id);
        return index === duplicateIndex;
    })
    console.log("user added: ", user);
}


app.use(express.json());


const io =new socketIO.Server(server,{
    cors:{
        origin:"http://127.0.0.1:5502"
      
    }
});

app.io = io;





const {messageRouter} = require('./routes/api/Message.js');

app.use('/api',require('./routes/api/users'));
app.use('/api/message', messageRouter);
app.use('/api',require('./routes/api/posts.js'));



io.on("connection",(socket) =>{

    console.log("Connection created: ");
    const id = socket.handshake.query.id;
    console.log("user id: ", id);
    addLoggedInUser(id);
    io.emit('users', loggedInUser || []);

    socket.on("new-message",(payload)=>{
        console.log("Payload",payload);
        // io.emit('new-message',payload);
        io.except(socket.id).emit('new-message',payload);  
    })

    socket.on('disconnect', () => {
        console.log("user disconneceed: ", id);
        removeLoggedInUser(id);
    })

});





const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`Application started on port ${PORT}`);
})


// module.exports = {
//     createNewClient
// };
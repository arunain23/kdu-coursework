
import express from "express"
import {createServer} from "http"
import cors from "cors"
import { Server } from "socket.io"


const app = express();

const server = createServer(app);

app.use(cors());
app.use(express.json());


const IO = new Server(server,{
    cors:{
        origin:"http://localhost:5173"
    }
});

// Test api
app.get("/",(req,res)=>{
    res.json({
        msg:"Hello World"
    });
});

let usersData = {};








IO.on("connection",(socket)=>{
    console.log("Connection created: ", socket.id);
    usersData[socket.id] = [];

    socket.emit('user-id', socket.id);
});


app.post('/stock', (req, res) => {
    const { id, stock_name, stock_symbol, transaction_price, timestamp = Date.now(), status } = req.body;

    if(!id){
        return res.status(500).json({
            message: 'Invalid data',
        })
    }

    if(!usersData[id]){
        usersData[id] = [];
    }

    IO.broadcast.emit('stock', req.body);
    // Listen the same event in front-end.

    usersData[id].push({
        stock_name,
        stock_symbol,
        transaction_price,
        timestamp,
        status,
    })
})

app.get('/stock', (req, res) => {
    const { id } = req.body;
    return usersData[id] || [];
})




const PORT = 5000;
server.listen(PORT, ()=>{
    console.log(`App started on port ${PORT}`)
});
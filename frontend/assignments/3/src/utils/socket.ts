
// // export default socket;
import { io, Socket } from "socket.io-client";

interface SocketType {
    socket: Socket;
}

class SocketManager {
    static socket: SocketType;

    static init() {
        this.socket = { socket: io('http://localhost:5000') };
    }
}

export default SocketManager;


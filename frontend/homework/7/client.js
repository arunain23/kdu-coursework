const socket=io("http://localhost:5000");
const messageInput=document.getElementById("msgInput");
const sendButton=document.getElementById("sendMessage");
const messageOutput=document.getElementById("messages");

function addMessage(from, message) {
    // Create message container div
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    // Create icon (assuming it's an image)
    const icon = document.createElement('img');
    if(from==="User") icon.src = 'man.png'; // Path to your icon image
    else icon.src='girl.png';
    messageContainer.appendChild(icon);

    // Create message paragraph
    const messagePara = document.createElement('p');
    messagePara.classList.add('message-text');
    messagePara.innerText = `${from}: ${message}`;
    messageContainer.appendChild(messagePara);

    // Append message container to the messages div
    messageOutput.appendChild(messageContainer);
    
}


sendButton.addEventListener("click",()=>{
    const message = messageInput.value;
    if(message===""){
        window.alert("please enter some message");
        return;
    }
    addMessage("You",message);
// send to particular message over websockets
    socket.emit("message",message);
    messageInput.value='';
    
});

socket.on("new-message",(message)=>{
    addMessage("User",message)
})

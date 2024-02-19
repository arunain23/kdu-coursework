let user = JSON.parse(localStorage.getItem('user'));
const socket=io("http://localhost:5000", {
  query: {
    id: user.id,
  }
});
const SAMPLE_AVATAR = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'

const conversationContainer = document.getElementById('conversation-messages');
const userContainer = document.getElementById('users-list');
const messageProfile = document.getElementById('selected-message-profile');
const messageItems = document.getElementById('message-items');

const textEditor = document.getElementById('text-editor');
const sendButton = document.getElementById('send-btn');
sendButton.addEventListener('click', () => {
  sendMessage();
})

function sendMessage(){
  const text = textEditor.value;
  
  const message = {
    id: Date.now(),
    sender: user.id,
    reciever: selectedUser.id,
    text: text,
  }

  fetch('http://localhost:5000/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message,
      sender: user.id,
      reciever: selectedUser.id,
    }),
  })
  .then( _ => {
    console.log("message sent");
    addMessage(message);
    textEditor.value = '';
  })
  .catch(e => {
    console.log("Error while sending message: ", e);
  })
}


conversationContainer.style.display = 'none';

let onlineUsers = [];
let selectedUser = {};

function addMessage(message){
  let messageDiv = document.createElement('div');
  messageDiv.textContent = message.text;
  messageDiv.classList.add('message-item');
  messageDiv.classList.add(message.sender === user.id ? 'self' : 'other');
  messageItems.appendChild(messageDiv);
}

function loadMessages(reciever, sender){
  fetch(`http://localhost:5000/api/message?sender=${sender}&reciever=${reciever}`)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const { messages } = data;
    messages.forEach(mess => {
      addMessage(mess);
    })
  })
  .catch(err => {
    console.log("Error while fethching message: ", err);
  })
}

function startMessanging(sUser){
  messageProfile.innerHTML = '';
  messageItems.innerHTML = '';
  selectedUser = sUser;
  conversationContainer.style.display = 'block';
  setUser(messageProfile, [sUser], false);
  loadMessages(selectedUser.id, user.id);
}

function setUser(parentElement, users, setListner = true){
  parentElement.innerHTML = '';
  users.forEach(user => {
    let userDiv = document.createElement('div');
    userDiv.classList.add('user-row');
    // Click event
    if(setListner){
      userDiv.addEventListener('click', () => {
        startMessanging(user);
      })
    }

    // First half
    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', user.profile_url || SAMPLE_AVATAR);
    imageDiv.appendChild(image);
    userDiv.appendChild(imageDiv);
    
    // Second half
    let infoWrapper = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.textContent = user.user_name;

    let infoDiv = document.createElement('div');
    infoDiv.textContent = user.user_email_id;

    infoWrapper.appendChild(nameDiv);
    infoWrapper.appendChild(infoDiv);

    userDiv.appendChild(infoWrapper);
    parentElement.appendChild(userDiv);
  })
}


const iconLinks = document.querySelectorAll('.icon-link');

iconLinks.forEach(iconLink => {
  const initialLikeCount = Math.floor(Math.random() * 100) + 1;
  
  iconLink.querySelector('.icon-container .like-count').innerText = initialLikeCount;

  iconLink.addEventListener('click', function(event) {

    let likeCount = parseInt(this.querySelector('.icon-container .like-count').innerText.trim());

    if (this.classList.contains('liked')) {
      likeCount--;
      this.classList.remove('liked');
      
    } else {
      likeCount++;
      this.classList.add('liked');
    }

    this.querySelector('.icon-container .like-count').innerText = likeCount;
  });
});


socket.on("new-message",(message)=>{
  if(message.reciever === user.id && message.sender === selectedUser.id && message.sender !== message.reciever){
    addMessage(message);
  } 
})

socket.on('users', (users) => {
  onlineUsers = users
  setUser(userContainer, onlineUsers);
})

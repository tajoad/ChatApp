const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const updateRoom = document.querySelector('.chat-rooms');

// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
})

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    // update new name in the chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    // reset the form
    newNameForm.reset();
    // show then hide the update message
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);
});

// update rooms
updateRoom.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
});

// check local storage for a name ternary operator
const username = localStorage.username ? localStorage.username : 'anonymous';

// class instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('general', username)

// get the chats and render
chatroom.getChats(data => chatUI.render(data))

// setTimeout(() => {
//     chatroom.updateRoom('gaming');
//     chatroom.updateName('yoshi')
//     chatroom.getChats((data) => {
//         console.log(data);
//     });
//     chatroom.addChat('hello');
// }, 3000);
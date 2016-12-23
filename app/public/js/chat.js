
//Load io methods
var socket = io();
var chatUser = document.querySelector('#chat-username');
var chatMsg = document.querySelector('#chat-message');

//Detect a Connection
socket.on('connect', function () {
    //Our form
    var chatForm = document.forms.chatForm;
    
    //run only where the form exists
    if(chatForm) {
        //Events
        chatForm.addEventListener('submit', function (evt) {
            evt.preventDefault();

            //Emit Custom Events ( postMessage )
            socket.emit('postMessage', {
               username: chatUser.value, 
               message: chatMsg.value
            });

            //clear msgBox & Persist Cursor.
            chatMsg.value = '';
            chatMsg.focus();
        }); //chatForm Event
        
        //Capture the updateMessages Event
        socket.on('updateMessages', function (data) {
            showMsg(data);
        }); //updateMessages
        
    }
}); //connect event



//Declare the Function
function showMsg(data) {
    var chatDisplay = document.querySelector('.chat-display');
    //Create a P tag.
    var newMsg = document.createElement('p');
    
    //Different Users
    if(chatUser.value === data.username){
        newMsg.className = 'bg-success chat-text';
    }else {
        newMsg.className = 'bg-danger text-info chat-text';
    }
    
    newMsg.innerHTML = '<strong>'+data.username+'</strong>: '+data.message;
    chatDisplay.insertBefore(newMsg, chatDisplay.firstChild);
}
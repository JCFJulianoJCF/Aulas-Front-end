document.addEventListener("submit", function (event) {
  event.preventDefault();

  var messageInput = document.getElementById("message");
  var message = messageInput.value;

  if (message.trim() !== "") {
    var messageItem = document.createElement("div");
    messageItem.classList.add("message-item", "message-user");

    var msgUser = document.createElement("div");
    msgUser.classList.add("msg-user");
    msgUser.innerHTML = "<strong>Você diz:</strong>";

    var msgChat = document.createElement("div");
    msgChat.classList.add("msg-chat");
    msgChat.textContent = message;

    messageItem.appendChild(msgUser);
    messageItem.appendChild(msgChat);

    var messagesList = document.querySelector(".messages-list");
    messagesList.appendChild(messageItem);

    messageInput.value = "";
  }
});

import { io } from "socket.io-client";

const socket = io();

const button = document.querySelector("#send-message-button");

button.addEventListener("click", () => {
  socket.emit("messageToServer", "Hello ma g");
});

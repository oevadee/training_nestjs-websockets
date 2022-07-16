import { io } from "socket.io-client";

const wsUrl = "http://localhost:80";

const socket = io(wsUrl);

socket.on("messageToClient", (message) => {
  console.log(message);
});

socket.emit("messageToServer", "test");

import { io } from "socket.io-client";

const wsUrl = "http://localhost:80";

export const socket = io(wsUrl);

socket.io.on("open", () => {
  console.log('%csocket.ts "User connected"', "color: #007acc;");
});

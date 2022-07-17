import { io } from "socket.io-client";

const wsUrl = "ws://localhost:80";

export const socket = io(wsUrl);

socket.io.on("open", () => {
  console.log('%csocket.ts "Socket connected"', "color: #007acc;");
});

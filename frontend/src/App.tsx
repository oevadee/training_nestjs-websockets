import React, { useEffect } from "react";
import { socket } from "./socket";
import { nanoid } from "nanoid";

type Message = {
  id: string;
  message: string;
};

export const App = () => {
  const [value, setValue] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([]);

  socket.on("messageToClient", (message: string) => {
    const id = nanoid();
    const newMessage = {
      id,
      message,
    };
    setMessages([...messages, newMessage]);
  });

  const sendWSrequest = () => {
    if (value.length >= 1) {
      socket.emit("messageToServer", value);
    }
  };

  return (
    <div className="app">
      <div className="input-button-wrapper">
        <input
          type="text"
          className="input-button-wrapper"
          onChange={(e) => setValue(e.target.value)}
        />
        <button id="app-button" onClick={sendWSrequest}>
          Click
        </button>
      </div>
      <ul className="messages">
        {messages.map(({ id, message }) => (
          <li key={id}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

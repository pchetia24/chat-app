import React, { useState } from "react";
import "../App.css";

export const MessageInput = ({ userId, setMessages, userMessages }) => {
  //submit Message

  const [messageInput, setMessageInput] = useState(null);

  const onSubmit = (e) => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();

      let mapCopy = new Map(userMessages);
      let messagesCopy = mapCopy.get(userId).messages;
      messagesCopy.push(messageInput);
      mapCopy.set(userId, mapCopy.get(userId));

      setMessages(mapCopy);
      setMessageInput("");
    }
  };
  return (
    <div>
      <textarea
        type="text"
        className="chat-text-area"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        onKeyDown={(e) => onSubmit(e)}
      />
    </div>
  );
};

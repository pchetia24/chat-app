import React from "react";
import "../App.css";
export const ChatItem = ({ chatUser, setUser, setMessages, messages }) => {
  return (
    <div
      className="chat-item-container"
      onClick={() => {
        setUser(chatUser.id);
        setMessages(messages.get(chatUser.id).messages);
      }}
    >
      <img
        className="user-profile-img"
        src={chatUser.imgUrl}
        width="48"
        height="48"
      />
      <div>{chatUser.name}</div>
    </div>
  );
};

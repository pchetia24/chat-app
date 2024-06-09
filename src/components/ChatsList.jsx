import React from "react";
import { ChatItem } from "./ChatItem";
import "../App.css";
import { CreateChat } from "./CreateChat";

export const ChatsList = ({
  chatItemsProp,
  setCurrentUser,
  userMessages,
  setCurrentUserMessages,
  setUserMessages,
}) => {
  return (
    <div className="chat-list-container">
      <CreateChat users={userMessages} setUsers={setUserMessages} />
      {Array.from(chatItemsProp.values()).map((item, idx) => (
        <ChatItem
          chatUser={item}
          setUser={setCurrentUser}
          setMessages={setCurrentUserMessages}
          messages={userMessages}
        />
      ))}
    </div>
  );
};

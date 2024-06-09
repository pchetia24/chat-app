import React, { useState, useEffect } from "react";
import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";
import "../App.css";

export const Chat = ({
  userId,
  currentUserMessages,
  setUserMessages,
  userMessages,
  img,
}) => {
  return (
    <div className="chat-text-container">
      {/* <div>{userMessages.get(userId).name}</div> */}
      <MessageList messages={currentUserMessages} img={img} />
      <MessageInput
        userId={userId}
        setMessages={setUserMessages}
        userMessages={userMessages}
      />
    </div>
  );
};

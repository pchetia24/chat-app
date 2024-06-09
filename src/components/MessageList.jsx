import React from "react";
import { Message } from "./Message";
import "../App.css";

export const MessageList = ({ messages, img }) => {
  //show Message
  return (
    <div className="message-list-container">
      {messages &&
        messages.map((item, idx) => <Message message={item} imgUrl={img} />)}
    </div>
  );
};

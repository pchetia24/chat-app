import React, { useState } from "react";
import { ChatsList } from "./ChatsList";
import { Chat } from "./Chat";
import "../App.css";
import { userMap } from "./User";

export const ChatApp = () => {
  //component rendered by App

  const [userMessages, setUserMessages] = useState(userMap); //a map that stores userId -> user data along with messages
  //sent/ received by each user. In a real time messaging server the list of messages can be represented as a map of
  //conversationId -> messagesList, where a conversation Id is the id representing a conversation object with 2 or more users

  //each chat's state can be represented as the state of all the user messages from the corresponding conversationId.

  const [currentUser, setCurrentUser] = useState(1); // the user with who the chat is created

  const [currentUserMessages, setCurrentUserMessages] = useState(
    userMessages.get(currentUser).messages,
  );

  return (
    <div className="chat-app-container">
      <ChatsList
        chatItemsProp={userMessages}
        setCurrentUser={setCurrentUser}
        setCurrentUserMessages={setCurrentUserMessages}
        userMessages={userMessages}
        setUserMessages={setUserMessages}
      />
      <Chat
        userId={currentUser}
        setUserMessages={setUserMessages}
        currentUserMessages={currentUserMessages}
        userMessages={userMessages}
        img={userMessages.get(currentUser).imgUrl}
      />
    </div>
  );
};

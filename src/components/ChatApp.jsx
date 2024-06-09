import React, { useState } from "react";
import { ChatsList } from "./ChatsList";
import { Chat } from "./Chat";
import "../App.css";
import { Users, userMap } from "./User";

export const ChatApp = () => {
  //users pass in from here
  //state of user to chats map
  function makeMap(list) {
    let map = new Map();
    for (const id of list) {
      map.set(id, [`Hi, my name is user ${id}`]);
    }
    return map;
  }
  // const [users, setUsers] = useState(userMap);

  const [userMessages, setUserMessages] = useState(userMap);
  const [currentUser, setCurrentUser] = useState(1);
  const [currentUserMessages, setCurrentUserMessages] = useState(
    userMessages.get(currentUser).messages,
  );
  console.log(currentUser);
  console.log(userMessages.get(currentUser), "hi");

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

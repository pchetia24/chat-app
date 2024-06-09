import React, { useState } from "react";
import { count } from "./User";

export const CreateChat = ({ users, setUsers }) => {
  const [userName, setUserName] = useState(null);
  const createNewChat = (e) => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      let mapCopy = new Map(users);
      let newUser = {
        id: mapCopy.size + 1,
        name: userName,
        imgUrl: `https://ui-avatars.com/api/?name=${userName}`,
        messages: [],
      };
      mapCopy.set(newUser.id, newUser);
      setUsers(mapCopy);
    }
  };

  console.log(users, "users");

  return (
    <div>
      <input
        className="create-chat-input"
        type="text"
        onKeyDown={(e) => createNewChat(e)}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Create chat"
      />
    </div>
  );
};

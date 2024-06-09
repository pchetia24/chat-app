import React from "react";

export const Message = ({ message, imgUrl }) => {
  //TODO: add timestamp using date object
  return (
    <div className="message-content">
      <div className="message">{message}</div>
      <img className="user-profile-img" src={imgUrl} width="48" height="48" />
    </div>
  );
};

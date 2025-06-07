import React from "react";

const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center my-1">
      <img
        alt="user"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        className="h-10"
      />
      <span className="px-2">
        <span className="font-bold">{name}</span>&nbsp;
        <span>{message}</span>
      </span>
    </div>
  );
};

export default LiveChatMessage;

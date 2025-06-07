import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/slice/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const [userMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(30),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  const handleSaveMessage = () => {
    setUserMessage("");
    dispatch(
      addMessage({
        name: "Rishav Kumar",
        message: userMessage,
      })
    );
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between border-b-1 sticky top-0 bg-white z-10">
        <h1 className="text-xl font-bold">Live Chat 🔽</h1>
        <div className="flex">
          <img
            className="h-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrx3ynfP5PnkV7ZzkBAHthTPUreK-0EMNUZw&s"
            alt=""
          />
          <img
            className="h-10 -mt-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EJH8G_tgsU7wgOfdrHM6Cd_T9cHqWoTQDw&s"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col-reverse gap-2 p-2 overflow-y-auto h-full">
        {chatData.map((message, index) => (
          // Disclaimer: Don't use index as key.
          <LiveChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveMessage();
        }}
      >
        <input
          type="text"
          className="border border-black w-10/12 rounded-lg mr-3 px-2 py-1"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button className="border border-black px-3 py-1 rounded-lg bg-gray-300 cursor-pointer">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;

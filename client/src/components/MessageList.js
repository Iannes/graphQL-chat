import React from "react";
import Bubble from "./Bubble";

const MessageList = ({ chatsQuery, from, style }) => {
  return (
    <div style={style.chatBody}>
      {chatsQuery.chats &&
        chatsQuery.chats.map(message => (
          <Bubble
            key={message.id}
            message={message}
            currentUser={message.from === from}
          />
        ))}
    </div>
  );
};

export default MessageList;

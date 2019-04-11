import React from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import Input from "./Input";

const ChatBox = ({
  style,
  from,
  setFrom,
  onclick,
  chatsQuery,
  content,
  setContent,
  createChat
}) => {
  return (
    <section style={style.App}>
      <Header
        style={style}
        from={from}
        setFrom={setFrom}
        title="Hitched"
        onclick={onclick}
      />
      <MessageList style={style} chatsQuery={chatsQuery} from={from} />
      <Input
        style={style}
        content={content}
        setContent={setContent}
        createChat={createChat}
      />
    </section>
  );
};

export default ChatBox;

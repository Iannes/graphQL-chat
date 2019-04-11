import React, { useState, useEffect } from "react";
import { graphql, compose } from "react-apollo";
import style from "./styles/Stylesheet";
import CHATS_QUERY from "./graphql/Queries";
import CREATE_CHAT_MUTATION from "./graphql/Mutations";
import subscribeToNewChats from "./graphql/Subscriptions";
import ChatBox from "./components/ChatBox";
import Signup from "./components/Signup";

const App = ({ chatsQuery, createChatMutation }) => {
  const [from, setFrom] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    subscribeToNewChats(chatsQuery);
  }, []);

  const createChat = async e => {
    if (e.key === "Enter") {
      await createChatMutation({
        variables: { content, from }
      });
      setContent("");
    }
  };

  if (!from || from.length === 0) {
    return <Signup style={style} signin={from => setFrom(from)} />;
  }
  return (
    <ChatBox
      style={style}
      from={from}
      setFrom={setFrom}
      onclick={() => setFrom("")}
      chatsQuery={chatsQuery}
      content={content}
      setContent={setContent}
      createChat={createChat}
    />
  );
};

export default compose(
  graphql(CHATS_QUERY, { name: "chatsQuery" }),
  graphql(CREATE_CHAT_MUTATION, { name: "createChatMutation" })
)(App);

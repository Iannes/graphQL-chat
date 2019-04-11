const createChat = async (e, createChatMutation) => {
  if (e.key === "Enter") {
    await createChatMutation({
      variables: { content, from }
    });
    setContent("");
  }
};

export default createChat;

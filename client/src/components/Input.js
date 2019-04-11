import React from "react";

const Input = ({ style, content, setContent, createChat }) => {
  return (
    <article style={style.chatInputWrapper}>
      <input
        style={style.chatInput}
        type="text"
        placeholder="Start typing"
        value={content}
        onKeyPress={createChat}
        onChange={e => setContent(e.target.value)}
      />
    </article>
  );
};

export default Input;

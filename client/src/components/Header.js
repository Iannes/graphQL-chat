import React from "react";

const Header = ({ style, title, from, onclick }) => {
  return (
    <header style={style.chatTitleWrapper}>
      <h2 style={style.chatTitle}>
        <span>{title}</span>
        <span style={style.username} onClick={onclick} title="logout">
          Hello, {from}
        </span>
      </h2>
    </header>
  );
};

export default Header;

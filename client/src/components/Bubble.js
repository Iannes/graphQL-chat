import React from "react";
import ChatBoxStyles from "../styles/ChatBoxStyles";
import Wrapper from "./Wrapper";
const { wrapper, author } = ChatBoxStyles;

const ActiveStyles = {
  color: "#000",
  padding: "20px",
  position: "relative",
  background: "#00aabb",
  borderRadius: ".4em"
};
const NonActiveStyles = {
  color: "#000",
  padding: "20px",
  position: "relative",
  background: "#f3961c",
  borderRadius: ".4em"
};

const NonActiveContainer = {
  maxWidth: "30%",
  position: "relative",
  left: "0",
  marginRight: "auto"
};
const ActiveContainer = {
  maxWidth: "30%",
  position: "relative",
  right: "0",
  marginLeft: "auto"
};

const Chatbox = ({ message, currentUser, className }) => (
  <Wrapper className={className || "active"} style={wrapper}>
    <article
      style={!!currentUser ? { ...ActiveContainer } : { ...NonActiveContainer }}
    >
      <h5 style={!!currentUser ? { ...author, color: "#5887a7" } : author}>
        {message.from}
      </h5>
      <p style={!!currentUser ? { ...ActiveStyles } : { ...NonActiveStyles }}>
        {message.content}
      </p>
    </article>
  </Wrapper>
);

export default Chatbox;

import React from "react";
import ChatBoxStyles from "../styles/ChatBoxStyles";
import Wrapper from "./Wrapper";
const { wrapper, author } = ChatBoxStyles;

const ActiveStyles = {
  color: "#fff",
  padding: "20px",
  position: "relative",
  background: "#46cfd5",
  borderRadius: "50% 0 0 0",
  fontSize: "18px",
  boxShadow: "#ccc 0 0 2px 1px"
};
const NonActiveStyles = {
  color: "#fff",
  padding: "15px",
  position: "relative",
  background: "#537be7",
  borderRadius: "50% 1000px 20px 0",
  fontSize: "18px",
  boxShadow: "#ccc 0 0 2px 1px"
};

const NonActiveContainer = {
  maxWidth: "30%",
  position: "relative",
  left: "0",
  marginRight: "auto",
  marginTop: "30px",
  marginBottom: "30px"
};
const ActiveContainer = {
  maxWidth: "30%",
  position: "relative",
  right: "0",
  marginLeft: "auto",
  marginTop: "30px",
  marginBottom: "30px"
};

const Chatbox = ({ message, currentUser, className }) => (
  <Wrapper className={className || "active"} style={wrapper}>
    <article
      style={!!currentUser ? { ...ActiveContainer } : { ...NonActiveContainer }}
    >
      <h5 style={!!currentUser ? { ...author, color: "#5887a7" } : author}>
        <span
          style={{
            display: "inline-flex",
            marginRight: "5px",
            borderRadius: "50%",
            background: "#d0bdcf",
            color: "white",
            marginBottom: "10px",
            width: "40px",
            height: "40px",
            fontSize: "22px",
            lineHeight: "19px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "capitalize"
          }}
        >
          {message.from[0]}
        </span>
        {message.from}
      </h5>
      <p style={!!currentUser ? { ...ActiveStyles } : { ...NonActiveStyles }}>
        {message.content}
      </p>
    </article>
  </Wrapper>
);

export default Chatbox;

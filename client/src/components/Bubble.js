import React from "react";
import ChatBoxStyles from "../styles/ChatBoxStyles";
import Wrapper from "./Wrapper";
const { wrapper, author } = ChatBoxStyles;

const ActiveStyles = {
  color: "#fff",
  padding: "20px",
  position: "relative",
  background: "#5f387b",
  borderRadius: ".4em",
  fontSize: "18px",
  boxShadow: "#ccc 0 0 2px 1px"
};
const NonActiveStyles = {
  color: "#fff",
  padding: "15px",
  position: "relative",
  background: "#397f8e",
  borderRadius: ".4em",
  fontSize: "18px",
  boxShadow: "#ccc 0 0 2px 1px",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: "0",
    height: "0",
    display: "block",
    border: "35px solid transparent",
    borderTopColor: "#27a834",
    borderBottom: "0",
    borderRight: "0",
    marginLeft: "-17.5px",
    marginBottom: "-35px"
  }
};

const NonActiveContainer = {
  maxWidth: "70%",
  position: "relative",
  left: "0",
  marginRight: "auto",
  marginTop: "30px",
  marginBottom: "30px"
};
const ActiveContainer = {
  maxWidth: "70%",
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
      <h5
        style={
          !!currentUser
            ? { ...author, color: "#5887a7", textAlign: "right" }
            : author
        }
      >
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

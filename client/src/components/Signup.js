import React from "react";
import Form from "./Form";
import Wrapper from "./Wrapper";

const Signup = ({ style, signin }) => {
  return (
    <Wrapper style={style}>
      <div style={style.signupWrapper}>
        <Form signin={signin} />
      </div>
    </Wrapper>
  );
};

export default Signup;

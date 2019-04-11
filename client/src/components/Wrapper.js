import React from "react";

const Wrapper = ({ style, children }) => {
  return <section style={style.wrapper}>{children}</section>;
};

export default Wrapper;

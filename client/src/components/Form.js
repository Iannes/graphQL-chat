import React, { useState } from "react";

const style = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },
  label: {
    fontSize: 16,
    fontWeight: "bolder",
    padding: 0,
    margin: "0 0 5px 0"
  },
  input: {
    backgroundColor: "transparent",
    border: "0",
    padding: 5,
    margin: 0,
    height: 40,
    borderBottom: "1px solid #0099a9",
    borderRadius: 0,
    width: "100%",
    boxShadow: "rgb(204, 204, 204) 1px 1px 19px 2px"
  },
  button: {
    backgroundColor: "#FFFFFF",
    border: "0",
    padding: 5,
    margin: "0 0 0 5px",
    height: 40
  }
};

const Form = ({ signin }) => {
  const [username, setUsername] = useState("");

  const submit = async e => {
    if (e.key === "Enter") {
      signin(username);
    }
  };

  return (
    <fieldset style={style.wrapper}>
      <section style={style.label}>
        <label>Type Username To Start:</label>
      </section>

      <section>
        <input
          style={style.input}
          type="text"
          placeholder="Your Username"
          value={username}
          onKeyPress={submit}
          onChange={e => setUsername(e.target.value)}
        />
      </section>
    </fieldset>
  );
};

export default React.memo(Form);
